FROM node:23-alpine3.20 AS base
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

# FROM ghcr.io/sigstore/cosign/cosign:v2.4.1 AS cosign-bin
# Source: https://github.com/chainguard-images/static
# FROM cgr.dev/chainguard/static:latest
# COPY --from=cosign-bin /ko-app/cosign /usr/local/bin/cosign
# ENTRYPOINT [ "cosign" ]

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build --push

FROM base AS production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci

RUN addgroup -g 1001 -S bytestack-nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD npm start

FROM base AS dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]