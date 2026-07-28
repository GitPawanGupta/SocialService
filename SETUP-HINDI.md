# Website Setup Guide (Hindi) 🚀

## Step 1: Files Check kare ✅

Aapke paas yeh files honi chahiye:
- `index.html` - Main webpage
- `styles.css` - Design aur colors
- `script.js` - Cart aur payment functionality
- `README.md` - English instructions
- `SETUP-HINDI.md` - Yeh file

## Step 2: Razorpay Account Setup 💳

### 2.1 Account Banaye
1. Browser mein jaye: **https://razorpay.com/**
2. "Sign Up" button click kare
3. Email aur password se sign up kare
4. Email verify kare

### 2.2 API Key Le
1. Razorpay Dashboard mein login kare
2. Left sidebar mein **Settings** par click kare
3. **API Keys** option par jaye
4. **Test Mode** ko ON kare
5. **Generate Test Key** button click kare
6. **Key ID** copy kare (Example: `rzp_test_abc123xyz`)

### 2.3 Code Mein Key Add kare
1. **script.js** file open kare
2. **Line 237** par jaye
3. Yeh line dhundhe:
   ```javascript
   key: 'rzp_test_YOUR_KEY_HERE',
   ```
4. `YOUR_KEY_HERE` ko apni actual key se replace kare:
   ```javascript
   key: 'rzp_test_abc123xyz',
   ```
5. File save kare (Ctrl+S)

## Step 3: Website Chalaye 🌐

### Tareeka 1: Direct Open (Sabse Simple)
1. **index.html** file par right-click kare
2. **Open with** → **Chrome** (ya koi browser) select kare
3. Website open ho jayegi!

### Tareeka 2: Local Server (Better)

**Agar Python installed hai:**
1. Terminal/CMD open kare
2. Folder mein jaye (jahan files hain)
3. Yeh command type kare:
   ```bash
   python -m http.server 8000
   ```
4. Browser mein jaye: **http://localhost:8000**

**Agar VS Code hai:**
1. VS Code mein folder open kare
2. **Live Server** extension install kare
3. index.html par right-click → **Open with Live Server**

## Step 4: Website Use kare 🎯

### Cart mein Items Add kare
1. Koi platform select kare (YouTube/Facebook/Instagram)
2. Service choose kare (Likes/Followers/Views)
3. Price dekhe aur **Add** button click kare
4. Top-right corner mein cart icon par number badh jayega

### Cart Dekhe
1. Top-right cart icon (🛒) click kare
2. Aapke selected items dikhenge
3. **+ / -** buttons se quantity change kar sakte ho
4. **🗑️** icon se item remove kar sakte ho

### Payment Kare (Test Mode)
1. Cart mein **Proceed to Payment** button click kare
2. Razorpay payment window open hogi
3. Test card details dale:
   - **Card Number**: `4111 1111 1111 1111`
   - **Expiry**: `12/25` (koi bhi future date)
   - **CVV**: `123` (koi bhi 3 digit)
   - **Name**: Apna naam
4. **Pay** button click kare
5. Payment successful message aayega!

## Common Problems aur Solutions 🔧

### Problem 1: Cart khali dikha rahi hai
**Solution**: Browser refresh kare (F5 press kare)

### Problem 2: Payment window nahi khul rahi
**Solution**: 
- Check kare `script.js` mein Razorpay key sahi hai ya nahi
- Internet connection check kare
- Browser console check kare (F12 press kare)

### Problem 3: Styling sahi nahi dikh rahi
**Solution**:
- Cache clear kare (Ctrl+Shift+Delete)
- Hard refresh kare (Ctrl+F5)
- Files check kare sabhi same folder mein hain

### Problem 4: "Cannot read property" error aa raha hai
**Solution**:
- Browser console open kare (F12)
- Error message padhe
- Sabhi files properly named hain check kare

## Testing Checklist ✓

Website test karne ke liye yeh sab try kare:
- [ ] Different services add kar ke dekho
- [ ] Quantity increase/decrease karo
- [ ] Cart mein items remove karo
- [ ] Test payment complete karo
- [ ] Mobile view mein check karo (browser ko resize karo)
- [ ] Cart close aur open karo
- [ ] Page refresh kare aur dekho cart items saved hain ya nahi

## Price aur Services Change kare 💰

### Prices Edit kare
1. **script.js** file open kare
2. **servicesData** object dhundhe (line 1 se start hota hai)
3. Price change kare:
   ```javascript
   { quantity: '500', price: 75 }  // 75 ko change kar sakte ho
   ```

### New Service Add kare
```javascript
youtube: {
    newservice: [
        { quantity: '100', price: 100, icon: 'fa-star' }
    ]
}
```

## Live Website Deploy kare 🌍

Test ke baad live karne ke liye:

1. **Razorpay Live Key** le:
   - Dashboard mein "Live Mode" ON kare
   - New API key generate kare
   - script.js mein update kare

2. **Hosting Service** choose kare:
   - **Netlify** (Free, Recommended)
   - **Vercel** (Free)
   - **GitHub Pages** (Free)
   - **Hostinger** (Paid)

3. **Domain Connect** kare (Optional):
   - GoDaddy, Namecheap se domain le
   - Hosting ke saath connect kare

## Support 📞

Koi problem ho to:
- WhatsApp: **7818942429**
- Instagram: **@evish_3**

---

**Happy Selling! 🎉**
Apne social media services ko online sell karo aur grow karo! 📈
