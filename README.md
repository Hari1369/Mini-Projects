🛒 HTML Structure Overview (mart.html)
    Store with Veg and Non-Veg
        Sections for:
            1) ✅ Vegetables
            2) 🍗 Non-Veg
            3) 🍎 Fruits
        🧺 Product Listings (with quantity input):
            Each item is a checkbox + number input (disabled until checked):
            1) Vegetables 🥕
                a) Potato (Rs 30/kg)
                b) Onion (Rs 40/kg)
                c) Tomato (Rs 25/kg)
            2) Non-Veg 🍖
                a) Meat (Rs 120/kg)
                b) Fish (Rs 80/kg)
                c) Egg (Rs 86/dozen)
            3) Fruits 🍎
                a) Apple (Rs 120/kg)
                b) Orange (Rs 100/kg)
                c) Mango (Rs 200/kg)
            🧮 Pricing Output:
                Each category has:
                → Individual item total (e.g., 🥔 Potato Rs: 90.00)
                → Total section price (e.g., Total price of Vegetables: Rs 120)
            💰 Final Calculation Area:
            Total Amount (sum of all items)
            Discount 💸 (based on slabs)
            GST (18%) 📈
            Grand Total 🧾
            Calculates:
            🔹 Individual item totals
            🔹 Category totals
            🔹 Total cart value
            💵 Discount (based on total amount):
                ≥1000 → 25%
                ≥300 → 15%
                ≥200 → 10%
                <200 → no discount
            📊 GST (18%)
            🧾 Final Grand Total = (Total - Discount) + GST
            Reset Button Logic
            → Resets everything including:
                a) Inputs
                b) Error messages
                c) Totals