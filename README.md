# Inventory Reservation System

A Next.js inventory reservation system built for multi-warehouse ecommerce checkout flows

# Features

- Product listing page
- Inventory reservation flow
- Reservation countdown timer
- Confirm / Cancel reservation
- Reservation API
- Stock validation
- Error handling for insufficient stock



# Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS



# API Routes

## GET /api/products

Returns all products and stock information.

## POST /api/reservations

Creates a reservation if stock is available.

Returns:
- 200 on success
- 409 if stock unavailable



# Reservation Logic

When a user reserves a product:
1. Backend checks current stock.
2. If stock exists:
   - stock is temporarily reduced
   - reservation succeeds
3. If stock is unavailable:
   - API returns 409 Conflict

This prevents overselling inventory.



# Concurrency Handling

In production, concurrency would be handled using:

- Database transactions
- Row-level locking
- Redis distributed locks

This ensures that if two users attempt to reserve the last item simultaneously, only one reservation succeeds.



# Expiry Handling

Reservations include a countdown timer.

In production:
- expired reservations would automatically release stock
- handled using cron jobs or background workers

---

# Run Locally

```bash
npm install
npm run dev
```

Open:
http://localhost:3000

---

# Future Improvements

- Prisma + PostgreSQL
- Redis locking
- Reservation persistence
- Authentication
- Idempotency keys
- Auto-expiry workers

“I would use database transactions with row-level locking or Redis distributed locks to ensure only one reservation succeeds for the last inventory unit.”
<img width="1919" height="1036" alt="image" src="https://github.com/user-attachments/assets/e6ccffe4-f38a-4fcb-859e-c03ef5d2ec41" />
