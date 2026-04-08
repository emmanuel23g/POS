// ==========================================
// CREDENCIALES
// ==========================================
const USERS = {
    admin: { 
        password: '1234', 
        name: 'Administrador', 
        role: 'admin', 
        shiftStart: '08:00', 
        shiftEnd: '17:00', 
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' 
    },
    worker: { 
        password: '1234', 
        name: 'Miguel Angel', 
        role: 'worker', 
        shiftStart: '14:00', 
        shiftEnd: '21:00', 
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' 
    }
};

// ==========================================
// MES ACTUAL
// ==========================================
const CURRENT_MONTH_INDEX = new Date().getMonth(); // 3 = Abril
const MONTH_NAMES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const CURRENT_MONTH_NAME = MONTH_NAMES[CURRENT_MONTH_INDEX];

// ==========================================
// DATOS ESTÁTICOS PARA REPORTES
// Semanas con valores distintos y días distintos por semana
// ==========================================
const REPORT_DATA = {
    months: [
        { name: 'Enero',      value: 12780.89 },
        { name: 'Febrero',    value: 14230.79 },
        { name: 'Marzo',      value: 10538.43 },
        { name: 'Abril',      value: 18938.73 },
        { name: 'Mayo',       value: 8938.73  },
        { name: 'Junio',      value: 10938.73 },
        { name: 'Julio',      value: 11838.65 },
        { name: 'Agosto',     value: 9538.65  },
        { name: 'Septiembre', value: 7838.54  },
        { name: 'Octubre',    value: 12838.54 },
        { name: 'Noviembre',  value: 9978.65  },
        { name: 'Diciembre',  value: 11500.00 }
    ],
    // Semanas: 4 valores distintos por mes
    weeks: {
        'Enero':      [3834.27, 3295.10, 2951.44, 2700.08],
        'Febrero':    [4269.24, 3857.33, 3251.80, 2852.42],
        'Marzo':      [3161.53, 2834.61, 2441.87, 2100.42],
        'Abril':      [5681.62, 4934.25, 4421.71, 3901.15],
        'Mayo':       [2681.62, 2234.68, 1921.45, 2100.98],
        'Junio':      [3281.62, 2934.52, 2521.74, 2200.85],
        'Julio':      [3551.60, 3159.25, 2741.33, 2386.47],
        'Agosto':     [2861.60, 2484.20, 2141.57, 2051.28],
        'Septiembre': [2351.56, 1959.14, 1741.88, 1785.96],
        'Octubre':    [3851.56, 3309.24, 2881.43, 2796.31],
        'Noviembre':  [2993.60, 2694.50, 2291.33, 1999.22],
        'Diciembre':  [3450.00, 3075.25, 2775.50, 2199.25]
    },
    // Días: Lu Ma Mi Ju Vi Sa Do — valores distintos por semana
    days: {
        'Enero-W1':      [620.50, 780.30, 540.20, 690.40, 580.60, 410.27, 212.00],
        'Enero-W2':      [530.40, 670.20, 490.10, 600.30, 510.50, 370.20, 124.40],
        'Enero-W3':      [480.30, 610.10, 440.00, 550.20, 460.40, 340.10, 70.34],
        'Enero-W4':      [430.20, 560.00, 390.90, 500.10, 410.30, 310.00, 98.58],
        'Febrero-W1':    [710.60, 820.40, 640.30, 750.50, 640.70, 460.34, 247.35],
        'Febrero-W2':    [630.50, 740.30, 560.20, 670.40, 560.60, 380.45, 309.82],
        'Febrero-W3':    [560.40, 680.20, 500.10, 610.30, 490.50, 340.36, 120.24],
        'Febrero-W4':    [500.30, 620.10, 440.00, 550.20, 420.40, 190.27, 131.15],
        'Marzo-W1':      [540.20, 650.10, 480.00, 590.10, 530.60, 381.63, 0],
        'Marzo-W2':      [480.10, 590.00, 420.90, 530.00, 470.50, 344.11, 0],
        'Marzo-W3':      [420.00, 530.90, 360.80, 470.90, 410.40, 258.77, 0],
        'Marzo-W4':      [370.90, 480.80, 310.70, 420.80, 360.30, 157.69, 0],
        'Abril-W1':      [1136.32, 1504.49, 822.69, 1163.59, 836.32, 521.79, 96.42],
        'Abril-W2':      [946.94, 1220.41, 752.24, 936.32, 746.94, 441.16, 50.24],
        'Abril-W3':      [836.80, 1080.30, 652.10, 826.20, 646.80, 381.23, 48.28],
        'Abril-W4':      [737.55, 936.32, 581.79, 809.06, 557.55, 354.53, 24.35],
        'Mayo-W1':       [510.30, 620.20, 440.10, 550.00, 440.30, 310.52, 0],
        'Mayo-W2':       [440.20, 550.10, 380.00, 480.90, 380.20, 260.44, 0],
        'Mayo-W3':       [380.10, 490.00, 320.90, 420.80, 320.10, 220.36, 190.09],
        'Mayo-W4':       [340.00, 450.90, 280.80, 380.70, 280.00, 180.28, 188.30],
        'Junio-W1':      [630.40, 740.30, 560.20, 650.10, 560.40, 400.72, 0],
        'Junio-W2':      [560.30, 670.20, 490.10, 580.00, 490.30, 354.62, 0],
        'Junio-W3':      [490.20, 600.10, 420.00, 510.90, 420.20, 300.54, 0],
        'Junio-W4':      [430.10, 540.00, 360.90, 450.80, 360.10, 258.46, 0],
        'Julio-W1':      [680.50, 790.40, 610.30, 700.20, 610.50, 450.70, 0],
        'Julio-W2':      [610.40, 720.30, 540.20, 630.10, 540.40, 403.61, 0],
        'Julio-W3':      [540.30, 650.20, 470.10, 560.00, 470.30, 270.52, 0],
        'Julio-W4':      [480.20, 590.10, 410.00, 500.90, 410.20, 236.43, 0],
        'Agosto-W1':     [540.20, 660.10, 480.00, 580.90, 480.20, 320.70, 0],
        'Agosto-W2':     [470.10, 590.00, 410.90, 510.80, 410.10, 281.61, 0],
        'Agosto-W3':     [400.00, 520.90, 340.80, 440.70, 340.00, 340.66, 0],
        'Agosto-W4':     [360.90, 470.80, 300.70, 390.60, 300.90, 217.61, 0],
        'Septiembre-W1': [450.10, 560.00, 380.90, 480.80, 390.10, 279.96, 0],
        'Septiembre-W2': [380.00, 490.90, 310.80, 410.70, 320.00, 248.14, 0],
        'Septiembre-W3': [330.90, 430.80, 260.70, 360.60, 260.90, 147.68, 0],
        'Septiembre-W4': [280.80, 380.70, 210.60, 310.50, 200.80, 413.28, 0],
        'Octubre-W1':    [720.60, 840.50, 650.40, 750.30, 640.60, 440.06, 0],
        'Octubre-W2':    [650.50, 770.40, 580.30, 680.20, 570.50, 388.09, 0],
        'Octubre-W3':    [580.40, 700.30, 510.20, 610.10, 500.40, 320.09, 0],
        'Octubre-W4':    [520.30, 640.20, 450.10, 550.00, 440.30, 276.48, 0],
        'Noviembre-W1':  [560.30, 680.20, 500.10, 600.00, 490.30, 462.70, 0],
        'Noviembre-W2':  [500.20, 620.10, 430.00, 530.90, 420.20, 381.21, 0],
        'Noviembre-W3':  [440.10, 560.00, 370.90, 460.80, 360.10, 310.12, 0],
        'Noviembre-W4':  [390.00, 500.90, 320.80, 410.70, 300.00, 276.82, 0],
        'Diciembre-W1':  [640.20, 760.10, 580.00, 680.90, 570.20, 419.58, 0],
        'Diciembre-W2':  [580.10, 700.00, 510.90, 610.80, 500.10, 373.56, 0],
        'Diciembre-W3':  [520.00, 640.90, 450.80, 550.70, 440.00, 363.50, 0],
        'Diciembre-W4':  [460.90, 580.80, 390.70, 490.60, 380.90, 235.85, 0]
    }
};

// ==========================================
// ESTADO
// ==========================================
const state = {
    isAuthenticated: false,
    currentUser: null,
    userData: null,
    cameraStream: null,
    capturedImage: null,
    selectedProduct: null,
    cart: [],
    
    products: [
        { id: 1, name: 'bolsas de plastico', price: 40,  stock: 150, image: 'https://images.unsplash.com/photo-1606293926075-69a00febf780?w=300&h=300&fit=crop' },
        { id: 2, name: 'popotes',            price: 40,  stock: 342, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop' },
        { id: 3, name: 'peluches',           price: 85,  stock: 45,  image: 'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=300&h=300&fit=crop' },
        { id: 4, name: 'juguetes',           price: 120, stock: 78,  image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop' },
        { id: 5, name: 'utiles escolares',   price: 25,  stock: 200, image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=300&fit=crop' },
        { id: 6, name: 'cosas del hogar',    price: 60,  stock: 89,  image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop' }
    ],
    
    sales: [
        { id: '001', product: 'BOLSAS DE COLORES',  items: 3, time: '9:30 am',  amount: 120, user: 'worker', workerName: 'Miguel Angel'   },
        { id: '002', product: 'PAQUETE DE POPOTES', items: 2, time: '10:30 am', amount: 80,  user: 'worker', workerName: 'Miguel Angel'   },
        { id: '003', product: 'TELEFONO',           items: 1, time: '1:20 PM',  amount: 130, user: 'admin',  workerName: 'Administrador' }
    ],
    
    reportState: {
        view: 'monthly',
        selectedMonth: null,
        selectedWeek: null
    }
};

// ==========================================
// LOGIN
// ==========================================
function login() {
    const username = document.getElementById('login-username').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');
    
    if (USERS[username] && USERS[username].password === password) {
        state.isAuthenticated = true;
        state.currentUser = username;
        state.userData = USERS[username];
        
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('app-container').style.display = 'block';
        
        setupRoleUI();
        showHome();
    } else {
        errorDiv.style.display = 'block';
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        setTimeout(() => { errorDiv.style.display = 'none'; }, 3000);
    }
}

// Enter key en login
document.addEventListener('DOMContentLoaded', () => {
    ['login-username','login-password'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') login(); });
    });
});

function setupRoleUI() {
    const isAdmin = state.userData.role === 'admin';
    document.getElementById('header-username').textContent = state.userData.name.toUpperCase();
    
    ['btn-calendar-header','btn-calendar-sell','btn-calendar-sales'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = isAdmin ? 'block' : 'none';
    });
    
    if (isAdmin) {
        document.body.classList.add('is-admin');
    } else {
        document.body.classList.remove('is-admin');
    }
}

function logout() {
    state.isAuthenticated = false;
    state.currentUser = null;
    state.userData = null;
    state.cart = [];
    state.selectedProduct = null;
    stopCamera();
    document.getElementById('app-container').style.display = 'none';
    document.getElementById('login-screen').classList.add('active');
    document.body.classList.remove('is-admin');
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-error').style.display = 'none';
}

// ==========================================
// NAVEGACIÓN CON TRANSICIONES SUAVES
// ==========================================
function showScreen(screenId) {
    const current = document.querySelector('.app-screen.active');
    const next = document.getElementById(screenId);
    if (!next || (current && current.id === screenId)) return;

    if (current) {
        // Salida suave
        current.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
        current.style.opacity = '0';
        current.style.transform = 'translateX(-18px)';

        setTimeout(() => {
            current.classList.remove('active');
            current.style.transition = '';
            current.style.opacity = '';
            current.style.transform = '';

            // Entrada suave
            next.style.opacity = '0';
            next.style.transform = 'translateX(18px)';
            next.style.transition = 'none';
            next.classList.add('active');

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    next.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
                    next.style.opacity = '1';
                    next.style.transform = 'translateX(0)';

                    setTimeout(() => {
                        next.style.transition = '';
                    }, 250);
                });
            });
        }, 200);
    } else {
        next.style.opacity = '0';
        next.style.transform = 'translateX(18px)';
        next.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                next.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
                next.style.opacity = '1';
                next.style.transform = 'translateX(0)';
                setTimeout(() => { next.style.transition = ''; }, 250);
            });
        });
    }
}

function showHome() {
    renderProducts();
    showScreen('home-screen');
}

function showSellFlow() {
    state.selectedProduct = null;
    state.cart = [];
    renderSellScreen();
    showScreen('sell-screen');
}

function showAddProduct() {
    resetProductForm();
    showScreen('add-product-screen');
}

function showDailySales() {
    renderSales();
    showScreen('sales-screen');
}

function showProfile() {
    renderProfile();
    showScreen('profile-screen');
}

function showReports() {
    if (state.userData.role !== 'admin') {
        alert('Solo los administradores pueden acceder a los reportes');
        return;
    }
    state.reportState.selectedMonth = null;
    state.reportState.selectedWeek = null;
    renderReports();
    showScreen('reports-screen');
}

// ==========================================
// PRODUCTOS
// ==========================================
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = state.products.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            ${state.userData && state.userData.role === 'admin'
                ? `<button class="delete-btn" onclick="deleteProduct(${p.id}, event)">×</button>`
                : ''}
            <img src="${p.image}" alt="${p.name}"
                 onerror="this.src='https://via.placeholder.com/300x300/cccccc/666666?text=${encodeURIComponent(p.name)}'">
            <div class="product-info">
                <span class="product-name">${p.name}</span>
            </div>
        </div>
    `).join('');
}

function deleteProduct(id, e) {
    e.stopPropagation();
    if (!confirm('¿Eliminar este producto?')) return;
    state.products = state.products.filter(p => p.id !== id);
    renderProducts();
}

function viewProduct(id) {
    // Abre el flujo de venta con ese producto preseleccionado
    state.selectedProduct = id;
    state.cart = [];
    renderSellScreen();
    showScreen('sell-screen');
}

// ==========================================
// FLUJO DE VENTA
// ==========================================
function renderSellScreen() {
    const content = document.getElementById('sell-content');
    
    let html = '<div class="sell-grid">';
    state.products.forEach(p => {
        const isSelected = state.selectedProduct === p.id;
        html += `
            <div class="sell-item ${isSelected ? 'selected' : ''}" onclick="selectSellProduct(${p.id})">
                <img src="${p.image}"
                     onerror="this.src='https://via.placeholder.com/300x300/cccccc/666666?text=${encodeURIComponent(p.name)}'">
                <div class="sell-item-name">${p.name}</div>
            </div>
        `;
    });
    html += '</div>';
    
    if (state.selectedProduct) {
        const product = state.products.find(p => p.id === state.selectedProduct);
        if (product) {
            const currentQty = getCartQty(product.id) || 1;
            html += `
                <div class="product-detail">
                    <img src="${product.image}"
                         onerror="this.src='https://via.placeholder.com/300x300/cccccc/666666?text=${encodeURIComponent(product.name)}'">
                    <div class="detail-name">${product.name}</div>
                    <div class="detail-price">$${product.price}</div>
                    <div class="detail-stock">Cantidad disponible: ${product.stock} artículos</div>
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="changeQty(-1)">−</button>
                        <div class="qty-value" id="qty-display">${currentQty}</div>
                        <button class="qty-btn" onclick="changeQty(1)">+</button>
                    </div>
                    <button class="btn-guardar" onclick="addToCart()">AGREGAR AL CARRITO</button>
                </div>
            `;
        }
    }
    
    if (state.cart.length > 0) {
        html += renderCart();
    }
    
    content.innerHTML = html;
}

function selectSellProduct(id) {
    state.selectedProduct = id;
    renderSellScreen();
    // Scroll suave al detalle
    setTimeout(() => {
        const detail = document.querySelector('.product-detail');
        if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
}

function getCartQty(productId) {
    const item = state.cart.find(i => i.id === productId);
    return item ? item.qty : null;
}

function changeQty(delta) {
    const product = state.products.find(p => p.id === state.selectedProduct);
    if (!product) return;
    const display = document.getElementById('qty-display');
    if (!display) return;
    let qty = parseInt(display.textContent) + delta;
    if (qty < 1) qty = 1;
    if (qty > product.stock) qty = product.stock;
    display.textContent = qty;
}

function addToCart() {
    const product = state.products.find(p => p.id === state.selectedProduct);
    if (!product) return;
    const qty = parseInt(document.getElementById('qty-display').textContent);
    const existing = state.cart.find(i => i.id === product.id);
    if (existing) {
        existing.qty = Math.min(existing.qty + qty, product.stock);
    } else {
        state.cart.push({ id: product.id, name: product.name, price: product.price, qty });
    }
    state.selectedProduct = null;
    renderSellScreen();
    // Scroll al carrito
    setTimeout(() => {
        const cart = document.querySelector('.cart-section');
        if (cart) cart.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
}

function renderCart() {
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let html = '<div class="cart-section"><div class="cart-title">Carrito</div>';
    state.cart.forEach(item => {
        html += `
            <div class="cart-item">
                <span>${item.name} x${item.qty}</span>
                <span>$${(item.price * item.qty).toFixed(2)}</span>
            </div>
        `;
    });
    html += `
        <div class="cart-total">
            <span>TOTAL</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <button class="btn-guardar" style="width:100%;margin-top:15px;" onclick="completeSale()">COMPLETAR VENTA</button>
    </div>`;
    return html;
}

function completeSale() {
    if (state.cart.length === 0) return;
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const mainProduct = state.cart[0];
    const sale = {
        id: String(Date.now()).slice(-3),
        product: mainProduct.name.toUpperCase(),
        items: state.cart.reduce((sum, i) => sum + i.qty, 0),
        time: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: true }),
        amount: total,
        user: state.currentUser,
        workerName: state.userData.name
    };
    state.sales.push(sale);
    state.cart.forEach(cartItem => {
        const product = state.products.find(p => p.id === cartItem.id);
        if (product) product.stock -= cartItem.qty;
    });
    state.cart = [];
    state.selectedProduct = null;
    alert(`Venta completada!\nTotal: $${total.toFixed(2)}`);
    showDailySales();
}

// ==========================================
// CÁMARA — fluida y con fallback
// ==========================================
async function startCamera() {
    const placeholder = document.getElementById('camera-placeholder');
    const video       = document.getElementById('camera-video');
    const overlay     = document.getElementById('camera-overlay');
    const cameraArea  = document.getElementById('camera-area');

    placeholder.innerHTML = '<div style="color:#666;font-size:12px;padding:20px;">Iniciando cámara...</div>';

    try {
        // Pide la cámara trasera primero, si no cualquiera
        const constraints = {
            video: {
                facingMode: { ideal: 'environment' },
                width:  { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: false
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        state.cameraStream = stream;
        video.srcObject = stream;

        await new Promise((resolve, reject) => {
            video.onloadedmetadata = resolve;
            video.onerror = reject;
        });
        await video.play();

        // Transición suave
        cameraArea.classList.add('active');
        placeholder.style.display = 'none';
        video.style.display   = 'block';
        overlay.style.display = 'flex';

        // Fade in del video
        video.style.opacity = '0';
        video.style.transition = 'opacity 0.3s ease';
        requestAnimationFrame(() => { video.style.opacity = '1'; });

    } catch (err) {
        console.warn('Cámara no disponible:', err.name, err.message);

        // Restaura placeholder con mensaje y botón de archivo
        placeholder.style.display = 'flex';
        placeholder.innerHTML = `
            <div style="text-align:center;padding:10px;">
                <div style="color:#999;font-size:11px;margin-bottom:10px;">
                    ${err.name === 'NotAllowedError'
                        ? 'Permiso de cámara denegado'
                        : 'Cámara no disponible'}
                </div>
                <button onclick="document.getElementById('file-input').click()" 
                        style="background:#333;color:#fff;border:none;border-radius:20px;padding:10px 20px;font-size:12px;cursor:pointer;">
                    Seleccionar imagen
                </button>
            </div>`;
    }
}

function stopCamera() {
    if (state.cameraStream) {
        state.cameraStream.getTracks().forEach(t => t.stop());
        state.cameraStream = null;
    }
    const video      = document.getElementById('camera-video');
    const overlay    = document.getElementById('camera-overlay');
    const placeholder = document.getElementById('camera-placeholder');
    const cameraArea  = document.getElementById('camera-area');

    if (video)      { video.style.display = 'none'; video.style.opacity = ''; video.style.transition = ''; }
    if (overlay)    overlay.style.display = 'none';
    if (placeholder) { placeholder.style.display = 'flex'; placeholder.innerHTML = `
        <button onclick="startCamera()" class="btn-camera-icon">
            <svg viewBox="0 0 24 24" width="40" height="40">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                      fill="none" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="13" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
        </button>`; }
    if (cameraArea)  cameraArea.classList.remove('active');
}

function captureImage() {
    const video  = document.getElementById('camera-video');
    const canvas = document.createElement('canvas');
    canvas.width  = video.videoWidth  || 640;
    canvas.height = video.videoHeight || 480;
    canvas.getContext('2d').drawImage(video, 0, 0);
    state.capturedImage = canvas.toDataURL('image/jpeg', 0.85);

    const img = document.getElementById('captured-image');
    img.src = state.capturedImage;
    img.style.transition = 'opacity 0.3s ease';
    img.style.opacity = '0';
    img.style.display = 'block';

    stopCamera();
    document.getElementById('camera-placeholder').style.display = 'none';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => { img.style.opacity = '1'; });
    });
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        state.capturedImage = e.target.result;
        const img        = document.getElementById('captured-image');
        const cameraArea = document.getElementById('camera-area');

        img.src = state.capturedImage;
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '0';
        img.style.display = 'block';
        cameraArea.classList.add('active');
        document.getElementById('camera-placeholder').style.display = 'none';
        document.getElementById('camera-video').style.display = 'none';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => { img.style.opacity = '1'; });
        });
    };
    reader.readAsDataURL(file);
}

function resetProductForm() {
    stopCamera();
    const img = document.getElementById('captured-image');
    if (img) { img.style.display = 'none'; img.src = ''; img.style.opacity = ''; }
    const successMsg = document.getElementById('success-msg');
    if (successMsg) successMsg.style.display = 'none';
    ['new-product-name','new-product-stock','new-product-price'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    state.capturedImage = null;
    // Reset file input
    const fi = document.getElementById('file-input');
    if (fi) fi.value = '';
}

function saveProduct() {
    const name  = document.getElementById('new-product-name').value.trim();
    const stock = parseInt(document.getElementById('new-product-stock').value);
    const price = parseFloat(document.getElementById('new-product-price').value);

    if (!name)             { alert('Ingrese el nombre del producto'); return; }
    if (isNaN(stock) || stock < 0) { alert('Ingrese una cantidad válida'); return; }
    if (isNaN(price) || price < 0) { alert('Ingrese un precio válido'); return; }

    const newProduct = {
        id:    Date.now(),
        name,
        stock,
        price,
        image: state.capturedImage || `https://via.placeholder.com/300x300/cccccc/666666?text=${encodeURIComponent(name)}`
    };

    state.products.push(newProduct);

    const msg = document.getElementById('success-msg');
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 2000);

    resetProductForm();
}

// ==========================================
// VENTAS DEL DIA
// ==========================================
function renderSales() {
    const content = document.getElementById('sales-content');
    const total   = state.sales.reduce((sum, s) => sum + s.amount, 0);

    // Solo muestra ventas del usuario actual (o todas si es admin)
    const visibleSales = state.userData.role === 'admin'
        ? state.sales
        : state.sales.filter(s => s.user === state.currentUser);

    let html = '<div class="sales-list">';
    if (visibleSales.length === 0) {
        html += '<div style="text-align:center;color:#999;padding:40px 20px;font-size:13px;">No hay ventas registradas hoy</div>';
    } else {
        visibleSales.forEach(s => {
            html += `
                <div class="sale-card">
                    <div class="sale-info">
                        <h3>${s.product}</h3>
                        <div class="sale-meta">${s.items} artículo${s.items !== 1 ? 's' : ''} · ${s.time} · ${s.workerName}</div>
                    </div>
                    <div class="sale-amount">$${s.amount.toFixed ? s.amount.toFixed(2) : s.amount}</div>
                </div>
            `;
        });
    }
    html += '</div>';
    html += `
        <div class="total-box">
            <div class="total-label">TOTAL DEL DÍA</div>
            <div class="total-value">$${total.toFixed ? total.toFixed(2) : total}</div>
        </div>
    `;
    content.innerHTML = html;
}

// ==========================================
// PERFIL
// ==========================================
function renderProfile() {
    const u       = state.userData;
    const content = document.getElementById('profile-content');
    const header  = document.getElementById('profile-header-title');

    if (header) header.textContent = u.role === 'admin' ? 'ADMINISTRADOR' : 'TRABAJADOR EN TURNO';

    const myTotal = state.sales
        .filter(s => s.user === state.currentUser)
        .reduce((sum, s) => sum + s.amount, 0);
    const myCount = state.sales.filter(s => s.user === state.currentUser).length;

    content.innerHTML = `
        <div class="profile-avatar-large">
            <img src="${u.avatar}" alt="${u.name}"
                 onerror="this.src='https://via.placeholder.com/120x120/cccccc/666666?text=${encodeURIComponent(u.name)}'">
        </div>
        <div class="profile-name">${u.name.toUpperCase()}</div>
        <div class="profile-role">${u.role === 'admin' ? 'Administrador' : 'Trabajador'}</div>
        <div class="shift-box">
            <div class="shift-label">HORARIO DE TURNO</div>
            <div class="shift-row">
                <div class="shift-col">
                    <div class="shift-col-label">ENTRADA</div>
                    <div class="shift-col-value">${u.shiftStart}</div>
                </div>
                <div class="shift-col">
                    <div class="shift-col-label">SALIDA</div>
                    <div class="shift-col-value">${u.shiftEnd}</div>
                </div>
            </div>
        </div>
        <div class="sales-box">
            <div class="sales-box-label">VENTAS DEL DÍA</div>
            <div class="sales-box-value">$${myTotal.toFixed ? myTotal.toFixed(2) : myTotal}</div>
            <div class="sales-box-count">${myCount} transacción${myCount !== 1 ? 'es' : ''}</div>
        </div>
        <button onclick="logout()" class="btn-logout">CERRAR SESIÓN</button>
    `;
}

// ==========================================
// REPORTES — mensual y semanal
// ==========================================
const DAY_NAMES = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

function renderReports() {
    const view = state.reportState.view;
    document.getElementById('tab-monthly').classList.toggle('active', view === 'monthly');
    document.getElementById('tab-weekly').classList.toggle('active',  view === 'weekly');

    if (view === 'monthly') {
        renderMonthlyReport();
    } else {
        renderWeeklyReport();
    }
}

function switchReportView(view) {
    state.reportState.view = view;
    state.reportState.selectedMonth = null;
    state.reportState.selectedWeek  = null;
    renderReports();
}

// —— MENSUAL ——
function renderMonthlyReport() {
    document.getElementById('reports-title').textContent = 'REGISTRO MENSUAL';
    const content = document.getElementById('reports-content');
    const sel     = state.reportState.selectedMonth;

    let html = '<div class="report-list">';
    REPORT_DATA.months.forEach((m, idx) => {
        const isCurrentMonth = (m.name === CURRENT_MONTH_NAME);
        const isSelected     = sel === idx;

        html += `
            <div class="report-item ${isSelected ? 'active' : ''}"
                 onclick="toggleMonth(${idx})"
                 style="${isCurrentMonth ? 'border-left: 4px solid var(--red);' : ''}">
                <span class="report-item-name" 
                      style="${isCurrentMonth ? 'color: var(--red);' : ''}">${m.name}</span>
                <span class="report-item-value">$${m.value.toFixed(2)}</span>
            </div>
        `;

        if (isSelected) {
            const weeks = REPORT_DATA.weeks[m.name] || [];
            html += '<div class="report-expanded">';
            weeks.forEach((wVal, wIdx) => {
                html += `
                    <div class="week-row" onclick="toggleWeekInMonth(${wIdx}, '${m.name}')">
                        <span class="week-name">Semana ${wIdx + 1}</span>
                        <span class="week-value">$${wVal.toFixed(2)}</span>
                    </div>
                `;
            });
            html += '</div>';
        }
    });
    html += '</div>';
    content.innerHTML = html;
}

function toggleMonth(idx) {
    state.reportState.selectedMonth = state.reportState.selectedMonth === idx ? null : idx;
    state.reportState.selectedWeek  = null;
    renderMonthlyReport();
}

function toggleWeekInMonth(wIdx, monthName) {
    // No necesita estado, solo expande días inline
    const monthIdx = REPORT_DATA.months.findIndex(m => m.name === monthName);
    const key      = `${monthName}-W${wIdx + 1}`;
    const days     = REPORT_DATA.days[key] || [];

    // Busca si ya está abierto
    const existing = document.getElementById(`days-${monthIdx}-${wIdx}`);
    if (existing) { existing.remove(); return; }

    // Cierra otros días abiertos
    document.querySelectorAll('[id^="days-"]').forEach(el => el.remove());
    document.querySelectorAll('.week-row.active').forEach(el => el.classList.remove('active'));

    const weekRows = document.querySelectorAll('.week-row');
    if (weekRows[wIdx]) weekRows[wIdx].classList.add('active');

    const daysList = document.createElement('div');
    daysList.className = 'days-list';
    daysList.id = `days-${monthIdx}-${wIdx}`;
    daysList.innerHTML = days.map((d, dIdx) => `
        <div class="day-row">
            <span class="day-name">${DAY_NAMES[dIdx]}</span>
            <span class="day-value">$${d.toFixed(2)}</span>
        </div>
    `).join('');

    // Inserta después del week-row clickeado
    if (weekRows[wIdx]) weekRows[wIdx].insertAdjacentElement('afterend', daysList);
}

// —— SEMANAL ——
function renderWeeklyReport() {
    document.getElementById('reports-title').textContent = 'REGISTRO SEMANAL';
    const content = document.getElementById('reports-content');
    const selMonth = state.reportState.selectedMonth;
    const selWeek  = state.reportState.selectedWeek;

    let html = '<div class="report-list">';
    REPORT_DATA.months.forEach((m, mIdx) => {
        const isCurrentMonth = (m.name === CURRENT_MONTH_NAME);
        const isMonthOpen    = selMonth === mIdx;
        const weeks          = REPORT_DATA.weeks[m.name] || [];
        const monthTotal     = weeks.reduce((s, v) => s + v, 0);

        html += `
            <div class="report-item ${isMonthOpen ? 'active' : ''}"
                 onclick="toggleMonthWeekly(${mIdx})"
                 style="${isCurrentMonth ? 'border-left: 4px solid var(--red);' : ''}">
                <span class="report-item-name"
                      style="${isCurrentMonth ? 'color: var(--red);' : ''}">${m.name}</span>
                <span class="report-item-value">$${monthTotal.toFixed(2)}</span>
            </div>
        `;

        if (isMonthOpen) {
            html += '<div class="report-expanded">';
            weeks.forEach((wVal, wIdx) => {
                const isWeekOpen = selWeek === wIdx;
                const key        = `${m.name}-W${wIdx + 1}`;
                const days       = REPORT_DATA.days[key] || [];

                html += `
                    <div class="week-row ${isWeekOpen ? 'active' : ''}"
                         onclick="toggleWeekWeekly(${wIdx})">
                        <span class="week-name">Semana ${wIdx + 1}</span>
                        <span class="week-value">$${wVal.toFixed(2)}</span>
                    </div>
                `;

                if (isWeekOpen) {
                    html += '<div class="days-list">';
                    days.forEach((d, dIdx) => {
                        html += `
                            <div class="day-row">
                                <span class="day-name">${DAY_NAMES[dIdx]}</span>
                                <span class="day-value">$${d.toFixed(2)}</span>
                            </div>
                        `;
                    });
                    html += '</div>';
                }
            });
            html += '</div>';
        }
    });
    html += '</div>';
    content.innerHTML = html;
}

function toggleMonthWeekly(mIdx) {
    state.reportState.selectedMonth = state.reportState.selectedMonth === mIdx ? null : mIdx;
    state.reportState.selectedWeek  = null;
    renderWeeklyReport();
}

function toggleWeekWeekly(wIdx) {
    state.reportState.selectedWeek = state.reportState.selectedWeek === wIdx ? null : wIdx;
    renderWeeklyReport();
}