import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Disable React Compiler completely — we don’t need it
  experimental: {
    reactCompiler: false,
  },
  // Make sure Turbopack doesn’t try anything fancy
  turbopack: {
    // optional, but makes it extra safe
    resolveAlias: {
      'sharp$': false,
      'onnxruntime-node$': false,
    },
  },
}

export default nextConfig