// Services Data from Images
const servicesData = {
    youtube: {
        subscribers: [
            { quantity: '100', price: 350, icon: 'fa-user-plus' },
            { quantity: '200', price: 700, icon: 'fa-user-plus' },
            { quantity: '500', price: 1500, icon: 'fa-user-plus' },
            { quantity: '1K', price: 2800, icon: 'fa-user-plus' },
            { quantity: '1.5K', price: 4200, icon: 'fa-user-plus' },
            { quantity: '2K', price: 5100, icon: 'fa-user-plus' },
            { quantity: '5K', price: 13000, icon: 'fa-user-plus' }
        ],
        views: [
            { quantity: '500', price: 120, icon: 'fa-eye' },
            { quantity: '1K', price: 230, icon: 'fa-eye' },
            { quantity: '1.5K', price: 330, icon: 'fa-eye' },
            { quantity: '2K', price: 450, icon: 'fa-eye' }
        ],
        likes: [
            { quantity: '500', price: 279, icon: 'fa-thumbs-up' },
            { quantity: '1K', price: 549, icon: 'fa-thumbs-up' },
            { quantity: '1.5K', price: 824, icon: 'fa-thumbs-up' },
            { quantity: '2K', price: 1111, icon: 'fa-thumbs-up' }
        ],
        watchtime: [
            { quantity: '100 Hours', price: 549, description: '5-45 Min+ Video | 1000 views = 1000 hours', icon: 'fa-clock' },
            { quantity: '200 Hours', price: 999, description: '5-45 Min+ Video | 1000 views = 1000 hours', icon: 'fa-clock' },
            { quantity: '500 Hours', price: 2500, description: '5-45 Min+ Video | 1000 views = 1000 hours', icon: 'fa-clock' },
            { quantity: '1000 Hours', price: 4999, description: '5-45 Min+ Video | 1000 views = 1000 hours', icon: 'fa-clock' },
            { quantity: '2000 Hours', price: 9999, description: '5-45 Min+ Video | 1000 views = 1000 hours', icon: 'fa-clock' }
        ]
    },
    facebook: {
        likes: [
            { quantity: '500', price: 75, icon: 'fa-thumbs-up' },
            { quantity: '1000', price: 110, icon: 'fa-thumbs-up' },
            { quantity: '1500', price: 160, icon: 'fa-thumbs-up' },
            { quantity: '2000', price: 200, icon: 'fa-thumbs-up' }
        ],
        followers: [
            { quantity: '500', price: 170, icon: 'fa-user-plus' },
            { quantity: '1K', price: 240, icon: 'fa-user-plus' },
            { quantity: '1.5K', price: 325, icon: 'fa-user-plus' },
            { quantity: '2K', price: 435, icon: 'fa-user-plus' },
            { quantity: '5K', price: 850, icon: 'fa-user-plus' },
            { quantity: '10K', price: 1250, icon: 'fa-user-plus' }
        ],
        views: [
            { quantity: '500', price: 35, icon: 'fa-eye' },
            { quantity: '1K', price: 55, icon: 'fa-eye' },
            { quantity: '1.5K', price: 77, icon: 'fa-eye' },
            { quantity: '2K', price: 97, icon: 'fa-eye' },
            { quantity: '5K', price: 175, icon: 'fa-eye' },
            { quantity: '10K', price: 410, icon: 'fa-eye' },
            { quantity: '15K', price: 495, icon: 'fa-eye' },
            { quantity: '20K', price: 650, icon: 'fa-eye' }
        ],
        comments: [
            { quantity: '300', price: 65, icon: 'fa-comment' },
            { quantity: '500', price: 100, icon: 'fa-comment' },
            { quantity: '1K', price: 195, icon: 'fa-comment' },
            { quantity: '1.5K', price: 265, icon: 'fa-comment' },
            { quantity: '2K', price: 340, icon: 'fa-comment' }
        ]
    },
    instagram: {
        likes: [
            { quantity: '1000', price: 65, icon: 'fa-heart', badge: 'PREMIUM' },
            { quantity: '2500', price: 115, icon: 'fa-heart', badge: 'PREMIUM' },
            { quantity: '3500', price: 145, icon: 'fa-heart', badge: 'PREMIUM' },
            { quantity: '4500', price: 175, icon: 'fa-heart', badge: 'PREMIUM' },
            { quantity: '5000', price: 195, icon: 'fa-heart', badge: 'PREMIUM' }
        ],
        followers: [
            { quantity: '1K', price: 165, icon: 'fa-user-plus', badge: 'PREMIUM' },
            { quantity: '1.5K', price: 225, icon: 'fa-user-plus', badge: 'PREMIUM' },
            { quantity: '2K', price: 285, icon: 'fa-user-plus', badge: 'PREMIUM' },
            { quantity: '5K', price: 720, icon: 'fa-user-plus', badge: 'PREMIUM' },
            { quantity: '10K', price: 1350, icon: 'fa-user-plus', badge: 'PREMIUM' }
        ],
        views: [
            { quantity: '1K', price: 30, icon: 'fa-eye', badge: 'PREMIUM' },
            { quantity: '1.5K', price: 37, icon: 'fa-eye', badge: 'PREMIUM' },
            { quantity: '2K', price: 45, icon: 'fa-eye', badge: 'PREMIUM' },
            { quantity: '5K', price: 65, icon: 'fa-eye', badge: 'PREMIUM' },
            { quantity: '10K', price: 95, icon: 'fa-eye', badge: 'PREMIUM' },
            { quantity: '15K', price: 130, icon: 'fa-eye', badge: 'PREMIUM' },
            { quantity: '20K', price: 120, icon: 'fa-eye', badge: 'PREMIUM' }
        ]
    }
};

// Shopping Cart
let cart = [];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    loadCartFromStorage();
    updateCartUI();
    createFloatingParticles();
    initHeroVideo();
});

// Initialize Hero Video
function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    if (video) {
        // Try to load and play video
        video.load();
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('✅ Hero video playing successfully');
                })
                .catch(err => {
                    console.log('⚠️ Video autoplay blocked or failed:', err);
                    // Try playing on first user interaction
                    document.addEventListener('click', () => {
                        video.play().catch(e => console.log('Video play failed:', e));
                    }, { once: true });
                });
        }
        
        // Check if video loaded
        video.addEventListener('loadeddata', () => {
            console.log('✅ Hero video loaded successfully');
            video.style.display = 'block';
        });
        
        // Handle video errors
        video.addEventListener('error', (e) => {
            console.error('❌ Video loading error:', video.error);
            // Hide video and show gradient background instead
            const videoBg = document.querySelector('.hero-video-bg');
            if (videoBg) {
                videoBg.style.display = 'none';
                console.log('🎨 Using gradient background instead');
            }
        });
        
        // Timeout fallback - if video doesn't load in 5 seconds
        setTimeout(() => {
            if (video.readyState === 0) {
                console.log('⏱️ Video timeout - using gradient background');
                const videoBg = document.querySelector('.hero-video-bg');
                if (videoBg) videoBg.style.display = 'none';
            }
        }, 5000);
    }
}

// Create Floating Colorful Particles
function createFloatingParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const colors = [
        'rgba(255, 0, 128, 0.6)',    // Pink
        'rgba(0, 255, 255, 0.6)',    // Cyan
        'rgba(138, 43, 226, 0.6)',   // Purple
        'rgba(255, 69, 0, 0.6)',     // Red-Orange
        'rgba(0, 191, 255, 0.6)',    // Deep Sky Blue
        'rgba(255, 0, 255, 0.6)',    // Magenta
        'rgba(255, 215, 0, 0.5)',    // Gold
        'rgba(0, 255, 127, 0.5)'     // Spring Green
    ];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 150 + 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 15;
        const animationDelay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color}, transparent);
            left: ${left}%;
            top: ${Math.random() * 100}%;
            animation-duration: ${animationDuration}s;
            animation-delay: ${animationDelay}s;
            filter: blur(${Math.random() * 40 + 20}px);
        `;
        
        container.appendChild(particle);
    }
}

// Render all services
function renderServices() {
    renderPlatformServices('youtube', 'youtubeServices', 'YouTube');
    renderPlatformServices('facebook', 'facebookServices', 'Facebook');
    renderPlatformServices('instagram', 'instagramServices', 'Instagram');
}

function renderPlatformServices(platform, containerId, platformName) {
    const container = document.getElementById(containerId);
    const data = servicesData[platform];
    
    Object.keys(data).forEach(serviceType => {
        const serviceCard = createServiceCard(platform, serviceType, data[serviceType], platformName);
        container.appendChild(serviceCard);
    });
}

function createServiceCard(platform, serviceType, options, platformName) {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const serviceTitle = serviceType.charAt(0).toUpperCase() + serviceType.slice(1);
    const iconClass = options[0].icon;
    
    card.innerHTML = `
        <div class="service-header">
            <i class="fas ${iconClass} service-icon"></i>
            <div class="service-title">${serviceTitle}</div>
        </div>
        <div class="service-options">
            ${options.map((option, index) => `
                <div class="service-option">
                    <div class="option-info">
                        <div class="option-quantity">
                            ${option.badge ? `<span style="background: #ffa500; padding: 2px 8px; border-radius: 5px; font-size: 0.7rem; margin-right: 5px;">${option.badge}</span>` : ''}
                            ${option.quantity}
                        </div>
                        ${option.description ? `<div class="option-description">${option.description}</div>` : ''}
                    </div>
                    <div class="option-right">
                        <div class="option-price">₹${option.price}</div>
                        <button class="add-to-cart-btn" onclick='addToCart(${JSON.stringify({
                            platform: platformName,
                            service: serviceTitle,
                            quantity: option.quantity,
                            price: option.price
                        })})'>
                            <i class="fas fa-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    return card;
}

// Cart Functions
function addToCart(item) {
    const existingItem = cart.find(i => 
        i.platform === item.platform && 
        i.service === item.service && 
        i.quantity === item.quantity
    );
    
    if (existingItem) {
        existingItem.count++;
    } else {
        cart.push({ ...item, count: 1, id: Date.now() });
    }
    
    saveCartToStorage();
    updateCartUI();
    showNotification('Item added to cart!');
}

function removeFromCart(id) {
    const itemElement = document.querySelector(`[data-item-id="${id}"]`);
    if (itemElement) {
        itemElement.style.animation = 'slideOutCart 0.3s ease';
        setTimeout(() => {
            cart = cart.filter(item => item.id !== id);
            saveCartToStorage();
            updateCartUI();
            showNotification('Item removed from cart');
        }, 300);
    } else {
        cart = cart.filter(item => item.id !== id);
        saveCartToStorage();
        updateCartUI();
    }
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.count += change;
        if (item.count <= 0) {
            removeFromCart(id);
        } else {
            saveCartToStorage();
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
    cartCount.textContent = totalItems;
    
    // Update cart count badge animation
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty<br><small style="font-size: 0.875rem; opacity: 0.7;">Add items to get started!</small></p>';
        cartTotal.textContent = '₹0';
    } else {
        // Group items by platform for better organization
        const groupedCart = cart.reduce((acc, item) => {
            if (!acc[item.platform]) acc[item.platform] = [];
            acc[item.platform].push(item);
            return acc;
        }, {});
        
        cartItems.innerHTML = Object.entries(groupedCart).map(([platform, items]) => `
            <div class="cart-platform-group">
                <div class="cart-platform-label">${platform}</div>
                ${items.map(item => `
                    <div class="cart-item" data-item-id="${item.id}">
                        <div class="cart-item-header">
                            <div class="cart-item-info">
                                <div class="cart-item-title">${item.service}</div>
                                <div class="cart-item-details">${item.quantity}</div>
                            </div>
                            <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remove item">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                        <div class="cart-item-quantity">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" title="Decrease">−</button>
                                <span>${item.count}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" title="Increase">+</button>
                            </div>
                            <div class="cart-item-price">₹${(item.price * item.count).toLocaleString('en-IN')}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.count), 0);
        const itemCount = cart.reduce((sum, item) => sum + item.count, 0);
        
        cartTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
        
        // Update cart summary if element exists
        updateCartSummary(itemCount, subtotal);
    }
}

function updateCartSummary(itemCount, subtotal) {
    const summary = document.querySelector('.cart-summary');
    if (summary) {
        const discount = 0; // You can add discount logic here
        const total = subtotal - discount;
        
        summary.innerHTML = `
            <div class="cart-summary-row">
                <span>Items (${itemCount})</span>
                <span>₹${subtotal.toLocaleString('en-IN')}</span>
            </div>
            ${discount > 0 ? `
                <div class="cart-summary-row">
                    <span>Discount</span>
                    <span style="color: #00ff00;">-₹${discount.toLocaleString('en-IN')}</span>
                </div>
            ` : ''}
        `;
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, rgba(0, 255, 255, 0.95), rgba(0, 128, 255, 0.95));
        color: white;
        padding: 1.2rem 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.4);
        z-index: 10000;
        animation: slideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-weight: 600;
        font-size: 1rem;
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    `;
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        setTimeout(() => notification.remove(), 500);
    }, 2500);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { 
            transform: translateX(400px) scale(0.5); 
            opacity: 0;
        }
        to { 
            transform: translateX(0) scale(1); 
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from { 
            transform: translateX(0) scale(1); 
            opacity: 1;
        }
        to { 
            transform: translateX(400px) scale(0.5); 
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Razorpay Payment Integration
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0);
    
    const options = {
        key: 'rzp_test_YOUR_KEY_HERE', // Replace with your Razorpay KEY
        amount: total * 100, // Amount in paise
        currency: 'INR',
        name: 'Growth Services',
        description: 'Social Media Growth Services',
        image: 'https://cdn-icons-png.flaticon.com/512/2111/2111320.png',
        handler: function (response) {
            showNotification('Payment Successful! ✓');
            console.log('Payment ID:', response.razorpay_payment_id);
            
            // Here you can send order details to your backend
            const orderDetails = {
                payment_id: response.razorpay_payment_id,
                items: cart,
                total: total,
                timestamp: new Date().toISOString()
            };
            console.log('Order Details:', orderDetails);
            
            // Clear cart after successful payment
            cart = [];
            saveCartToStorage();
            updateCartUI();
            toggleCart();
            
            alert('Payment successful! Order ID: ' + response.razorpay_payment_id);
        },
        prefill: {
            name: '',
            email: '',
            contact: ''
        },
        theme: {
            color: '#00ffff'
        },
        modal: {
            ondismiss: function() {
                console.log('Payment cancelled');
            }
        }
    };
    
    const rzp = new Razorpay(options);
    rzp.open();
}
