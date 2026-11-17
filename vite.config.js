import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import handler from './api/send.js'

function localApiPlugin() {
  return {
    name: 'local-api-handler',
    configureServer(server) {
      server.middlewares.use('/api/send', async (req, res) => {
        // Collect request body
        let body = ''
        req.on('data', chunk => {
          body += chunk
        })
        req.on('end', async () => {
          try {
            req.body = body ? JSON.parse(body) : {}
          } catch {
            req.body = {}
          }

          // Mock Express/Vercel res.status().json()
          const customRes = {
            status(statusCode) {
              res.statusCode = statusCode
              return this
            },
            json(data) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(data))
              return this
            }
          }

          try {
            await handler(req, customRes)
          } catch (err) {
            console.error('Error in local API handler:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, message: 'Server error' }))
          }
        })
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '')
  // Ensure process.env has the variables for local serverless handler
  process.env.RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY

  return {
    plugins: [react(), localApiPlugin()],
  }
})
