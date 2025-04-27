# Incident Management API

A highly efficient and secure REST API built with TypeScript, Express, and Prisma for managing incidents. The API implements robust error handling, rate limiting, and is secured with Helmet middleware for enhanced security.

## Security Features

- **Rate Limiting**: Prevents abuse through request rate limiting
- **Helmet Security**: Implements various HTTP headers for protection against:
  - XSS attacks
  - Clickjacking
  - MIME type sniffing
  - And other web vulnerabilities
- **Error Handling**: Comprehensive error handling middleware
- **Input Validation**: Request payload validation

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## Project Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sparkalhood
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Database**
   - Create a `.env` file in the root directory
   - Add your PostgreSQL connection string:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
   ```

4. **Database Migration**
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev
   
   # Seed the database (if needed)
   npm run seed
   ```

## Available Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm run start` - Runs the compiled application
- `npm run dev` - Runs the application in development mode
- `npm run watch` - Runs the application with hot-reload
- `npm run seed` - Seeds the database with initial data

## API Endpoints

### 1. Get All Incidents
```bash
curl -X GET http://localhost:5050/api/v1/incident \
  -H "Content-Type: application/json"
```

### 2. Get Incident by ID
```bash
curl -X GET http://localhost:5050/api/v1/incident/1 \
  -H "Content-Type: application/json"
```

### 3. Create New Incident
```bash
curl -X POST http://localhost:5050/api/v1/incident \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AI hallucination case",
    "description": "An AI chatbot recommended incorrect medical advice",
    "severity": "High",
    "reportedAt": "2025-04-20T10:00:00Z"
  }'
```

### 4. Delete Incident
```bash
curl -X DELETE http://localhost:5050/api/v1/incident/1 \
  -H "Content-Type: application/json"
```

## API Response Examples

### Success Response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "AI hallucination case",
    "description": "An AI chatbot recommended incorrect medical advice",
    "severity": "High",
    "reportedAt": "2025-04-20T10:00:00Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Incident not found",
    "statusCode": 404
  }
}
```

## Rate Limiting

The API implements rate limiting with the following constraints:
- 100 requests per 15 minutes per IP address
- Applies to all API endpoints under `/api/`

## Error Handling

The API implements comprehensive error handling for:
- Validation errors
- Not found errors
- Database errors
- Rate limiting errors
- Server errors
