// ============================================================
// CONFIGURACIÓN - CONTROL DE RESEÑAS
// ============================================================
// ⭐ CAMBIA ESTOS VALORES PARA CONTROLAR LAS RESEÑAS
// ============================================================
const TOTAL_REVIEWS_TO_SHOW = 70;    // Total de reseñas a mostrar
const REVIEWS_PER_PAGE = 5;          // Cuántas reseñas por página
// ============================================================

// ============================================================
// GENERADOR DE RESEÑAS
// ============================================================

const nombres = [
    'Carlos', 'Mario', 'Laura', 'Juan', 'Ana', 'Luis', 'María', 'José', 'Paula', 'Andrés',
    'Sofía', 'Daniel', 'Valentina', 'David', 'Natalia', 'Jorge', 'Camila', 'Santiago', 'Isabella', 'Felipe',
    'Lucía', 'Miguel', 'Gabriela', 'Sebastián', 'Manuela', 'Alejandro', 'Daniela', 'Javier', 'Valeria', 'Oscar',
    'Diana', 'Ricardo', 'Paola', 'Fernando', 'Tatiana', 'Hernando', 'Liliana', 'Guillermo', 'Cristina', 'Rafael',
    'Monica', 'Julian', 'Carmen', 'Pablo', 'Andrea', 'Gustavo', 'Elena', 'Hugo', 'Mariana', 'Roberto',
    'Claudia', 'Alberto', 'Victoria', 'Emilio', 'Catalina', 'Manuel', 'Adriana', 'Francisco', 'Angela', 'Dario',
    'Silvia', 'Pedro', 'Lina', 'Ramon', 'Nora', 'Gilberto', 'Rosa', 'Antonio', 'Bertha', 'Cesar'
];

const apellidos = [
    'Álvarez', 'Rodríguez', 'Vargas', 'Hernández', 'Martínez', 'García', 'López', 'González', 'Pérez', 'Sánchez',
    'Ramírez', 'Torres', 'Rivera', 'Morales', 'Ortiz', 'Cruz', 'Reyes', 'Gutiérrez', 'Mendoza', 'Jiménez',
    'Romero', 'Salazar', 'Castro', 'Gómez', 'Díaz', 'Mejía', 'Rojas', 'Orozco', 'Acosta', 'Espinoza'
];

const roles = [
    'Transportista', 'Taller Mecánico', 'Propietario de flota', 'Ingeniero Mecánico',
    'Conductor profesional', 'Propietario de vehículo particular', 'Mecánico especializado',
    'Gerente de flota', 'Operador logístico', 'Técnico automotriz',
    'Propietario de taller', 'Ingeniero de mantenimiento', 'Conductor de carga pesada',
    'Inspector técnico', 'Consultor automotriz'
];

const ciudades = [
    'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Bucaramanga', 'Cartagena', 
    'Pereira', 'Cúcuta', 'Ibagué', 'Pasto', 'Manizales', 'Villavicencio',
    'Santa Marta', 'Armenia', 'Valledupar', 'Montería', 'Sincelejo', 'Popayán',
    'Neiva', 'Riohacha', 'Tunja', 'Quibdó', 'San Andrés'
];

const testimonios45 = [
    "Excelente servicio y atención. Encontré el repuesto que necesitaba en tiempo récord. El asesoramiento técnico fue muy profesional. ¡100% recomendados!",
    "La mejor importadora de repuestos que he conocido. Su catálogo es amplio y los precios son muy competitivos. Siempre tienen lo que busco.",
    "Increíble la rapidez con la que llegó mi pedido. Los repuestos son de excelente calidad y el servicio postventa es excepcional. ¡Súper satisfecho!",
    "He comprado varias veces y nunca me han fallado. La atención al cliente es de primera y el seguimiento del envío es muy preciso.",
    "Los mejores repuestos del mercado. He probado otras importadoras pero esta es la única que cumple con los estándares de calidad que necesito.",
    "Excelente relación calidad-precio. Los repuestos llegaron en perfectas condiciones y la comunicación fue excelente durante todo el proceso.",
    "Mi taller mecánico depende de esta importadora. Siempre tienen stock de los repuestos más solicitados y la entrega es puntual.",
    "Muy profesionales y confiables. He hecho múltiples pedidos y todos han sido un éxito. Definitivamente mi proveedor favorito.",
    "El equipo técnico es muy conocedor y siempre me recomiendan la mejor opción para cada vehículo. No cambio de proveedor.",
    "La logística es impecable. Tengo una flota de 20 vehículos y todos los repuestos llegan a tiempo. Muy recomendados.",
    "Excelente experiencia de compra. El sitio web es fácil de usar y el proceso de pago es seguro. Los repuestos son 100% originales.",
    "Sin duda la mejor opción en Colombia para repuestos automotrices. La calidad del producto y el servicio son insuperables.",
    "Rápido, confiable y con los mejores precios. No necesito buscar en otro lugar, aquí encuentro todo lo que necesito.",
    "El envío fue más rápido de lo esperado. Los repuestos llegaron bien embalados y en perfectas condiciones. Muy contento con la compra.",
    "Siempre me atienden con mucha amabilidad y profesionalismo. Resuelven todas mis dudas técnicas y me asesoran muy bien.",
    "Los repuestos son exactamente lo que se describe en el catálogo. La transparencia y honestidad de esta empresa es destacable.",
    "Mi mecánico de confianza siempre recomienda esta importadora. Después de probarlos, entiendo por qué. Excelente calidad.",
    "La garantía que ofrecen es muy completa y me da mucha tranquilidad. He tenido que hacer un par de cambios y todo fue sin problema.",
    "Envíos nacionales muy eficientes. Hago pedidos desde la costa y llegan en máximo 3 días. ¡Excelente servicio logístico!",
    "El servicio de asesoría técnica me ha salvado en varias ocasiones. Siempre encuentro la solución que necesito.",
    "Productos originales, precios competitivos y entregas rápidas. No pido más. Esta es mi importadora de confianza.",
    "He comprado repuestos para varios modelos de vehículos y todos han sido perfectos. La variedad de marcas es impresionante.",
    "La atención telefónica es muy buena, siempre están dispuestos a ayudar y resolver cualquier inconveniente.",
    "Cumplen lo que prometen. Los repuestos tienen la calidad esperada y el tiempo de entrega es excelente.",
    "Como transportista, necesito repuestos confiables y rápidos. Esta empresa siempre cumple con mis expectativas.",
    "El sistema de seguimiento de pedidos es muy útil. Puedo ver en tiempo real dónde está mi envío. ¡Muy práctico!",
    "He tenido excelentes experiencias con sus productos. La durabilidad de los repuestos es muy buena.",
    "Recomiendo ampliamente esta importadora. Son serios, responsables y tienen productos de alta calidad.",
    "Los precios son muy competitivos y la calidad es superior a otras marcas que he probado. Excelente relación costo-beneficio.",
    "Mi flota de camiones funciona mejor desde que compramos los repuestos aquí. La calidad marca la diferencia.",
    "El equipo de atención al cliente es muy eficiente. Siempre responden rápido y solucionan mis dudas.",
    "No tengo quejas, todo ha sido perfecto. La puntualidad y la calidad de los productos son impecables.",
    "La experiencia de compra en línea es muy buena. La página es intuitiva y el proceso de pago es seguro.",
    "El taller donde trabajo prefiere esta importadora sobre cualquier otra. La calidad de los repuestos es indiscutible.",
    "Me gusta que tengan una gran variedad de marcas. Siempre encuentro lo que busco, sin importar el modelo del vehículo.",
    "El servicio postventa es excelente. Cualquier duda que tengo sobre la instalación, me la resuelven de inmediato.",
    "La confiabilidad de sus productos es altísima. No he tenido fallas con ningún repuesto que he comprado aquí.",
    "Recomiendo esta importadora a todos mis colegas. La calidad del servicio y los productos son excepcionales.",
    "Excelente comunicación durante todo el proceso de compra. Te mantienen informado sobre el estado de tu pedido.",
    "Los repuestos llegan en el tiempo estipulado y en perfectas condiciones. Sin duda, una empresa muy seria.",
    "He ahorrado tiempo y dinero desde que empecé a comprar aquí. La eficiencia de esta importadora es admirable.",
    "La calidad de los materiales es superior a lo que esperaba. Muy contento con cada compra que he hecho.",
    "El equipo de trabajo es muy profesional. Siempre están dispuestos a ayudar y resolver cualquier inconveniente.",
    "Una empresa que cumple sus promesas. Los repuestos son de alta calidad y el servicio es impecable.",
    "He tenido experiencias muy positivas con esta importadora. La atención al cliente es de primera categoría.",
    "Los envíos siempre llegan antes de lo previsto. La logística de esta empresa es muy eficiente.",
    "Mis clientes están muy satisfechos con los repuestos que les instalamos. La calidad de los productos es excelente.",
    "La página web es muy fácil de usar y el catálogo es muy completo. Encuentro todo lo que necesito rápidamente.",
    "Definitivamente recomiendo esta importadora. Son líderes en el sector por su calidad y confiabilidad.",
    "Después de probar varias importadoras, esta es la única que cumple con todos mis requisitos. Excelente en todo."
];

const testimonios35 = [
    "Buena calidad de repuestos, pero el envío demoró un poco más de lo esperado. Sin embargo, el producto es excelente.",
    "Los repuestos son de buena calidad, pero el proceso de compra podría ser más ágil. Aun así, estoy satisfecho.",
    "El producto llegó en buen estado, aunque el tiempo de entrega fue un poco más largo de lo estipulado. Vale la pena por la calidad.",
    "Muy buenos repuestos, pero el servicio al cliente podría mejorar en los tiempos de respuesta. Por lo demás, todo bien.",
    "La calidad es buena, pero tuvimos un pequeño problema con la comunicación. El producto final cumplió con lo esperado.",
    "El repuesto es excelente, pero la entrega se demoró 3 días más de lo acordado. A pesar de eso, el producto vale la espera.",
    "Buena relación calidad-precio. El único inconveniente fue que no tenían el color exacto que quería, pero encontré una alternativa.",
    "Los repuestos son originales y de buena calidad, pero la experiencia de compra en línea podría ser más fluida.",
    "Buen producto, pero el embalaje no era el más seguro. Por suerte, el repuesto no sufrió daños. Recomiendo mejorar ese aspecto.",
    "La calidad de los repuestos es buena, pero me hubiera gustado más información sobre el origen de los productos."
];

const testimonios3 = [
    "El repuesto es de buena calidad, pero el retraso en el envío fue significativo. Entiendo los temas logísticos, pero deberían mejorar sus tiempos.",
    "El producto cumplió con lo esperado, pero la demora en la entrega fue considerable. Espero que mejoren su servicio de envíos.",
    "Los repuestos son buenos, pero el proceso logístico dejó mucho que desear. El pedido tardó más de una semana en llegar.",
    "La calidad del repuesto es aceptable, pero el servicio de envíos fue muy lento. Tuvimos que esperar más de lo estipulado.",
    "El producto es bueno, pero el tiempo de entrega fue excesivo. Si mejoran la logística, sería excelente.",
    "Los repuestos son de buena calidad, pero no entiendo por qué tardaron tanto en enviarlos. Necesitan optimizar su distribución.",
    "El repuesto funciona bien, pero la espera fue demasiado larga. El seguimiento del pedido tampoco fue muy claro.",
    "Buen producto, pero el servicio de envíos fue muy deficiente. Tardó 8 días hábiles en llegar cuando ofrecieron 3.",
    "La calidad del repuesto es buena, pero tuvimos muchos problemas con el rastreo del pedido. La logística debe mejorar.",
    "El producto es correcto, pero la demora en la entrega fue frustrante. Pido que revisen sus procesos logísticos.",
    "El repuesto cumple su función, pero el servicio de entregas no fue el mejor. La comunicación sobre el estado del pedido fue muy pobre."
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getInitials(nombre, apellido) {
    return nombre.charAt(0) + apellido.charAt(0);
}

function getAvatarColor(index) {
    const colors = [
        '#2870dd', '#c5a059', '#25d366', '#d32f2f', '#e67e22',
        '#9b59b6', '#1abc9c', '#e74c3c', '#2ecc71', '#f39c12',
        '#3498db', '#8e44ad', '#16a085', '#c0392b', '#27ae60'
    ];
    return colors[index % colors.length];
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fas fa-star star-empty"></i>';
    }
    return stars;
}

function generateReview(index, rating, testimonio) {
    const nombre = getRandom(nombres);
    const apellido = getRandom(apellidos);
    const nombreCompleto = `${nombre} ${apellido}`;
    const iniciales = getInitials(nombre, apellido);
    const rol = getRandom(roles);
    const ciudad = getRandom(ciudades);
    const años = Math.floor(Math.random() * 5) + 1;
    
    return {
        id: index + 1,
        nombre: nombreCompleto,
        iniciales: iniciales,
        rol: `${rol} • ${ciudad}`,
        tiempo: `${años} año${años > 1 ? 's' : ''} cliente`,
        rating: rating,
        testimonio: testimonio,
        avatarColor: getAvatarColor(index)
    };
}

// Generar todas las reseñas
const todasLasReseñas = [];

for (let i = 0; i < 49; i++) {
    const testimonio = testimonios45[i % testimonios45.length];
    todasLasReseñas.push(generateReview(i, 4.5, testimonio));
}

for (let i = 0; i < 10; i++) {
    const testimonio = testimonios35[i % testimonios35.length];
    todasLasReseñas.push(generateReview(49 + i, 3.5, testimonio));
}

for (let i = 0; i < 11; i++) {
    const testimonio = testimonios3[i % testimonios3.length];
    todasLasReseñas.push(generateReview(59 + i, 3.0, testimonio));
}

// Mezclar aleatoriamente
for (let i = todasLasReseñas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [todasLasReseñas[i], todasLasReseñas[j]] = [todasLasReseñas[j], todasLasReseñas[i]];
}

// ============================================================
// PAGINACIÓN
// ============================================================
const reseñasAMostrar = todasLasReseñas.slice(0, TOTAL_REVIEWS_TO_SHOW);
let currentPage = 0;
const totalPages = Math.ceil(reseñasAMostrar.length / REVIEWS_PER_PAGE);

const container = document.getElementById('reviewsContainer');
const prevBtn = document.getElementById('prevPageBtn');
const nextBtn = document.getElementById('nextPageBtn');
const startSpan = document.getElementById('startIndex');
const endSpan = document.getElementById('endIndex');
const totalSpan = document.getElementById('totalReviews');

function renderPage(page) {
    const start = page * REVIEWS_PER_PAGE;
    const end = Math.min(start + REVIEWS_PER_PAGE, reseñasAMostrar.length);
    const reviewsToShow = reseñasAMostrar.slice(start, end);

    // Limpiar contenedor
    container.innerHTML = '';

    // Renderizar reseñas
    reviewsToShow.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.style.borderTopColor = review.rating >= 4 ? '#25d366' : review.rating >= 3.5 ? '#f5b342' : '#d32f2f';
        
        card.innerHTML = `
            <div class="rating-badge">${review.rating} ★</div>
            <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
            <div class="stars">${renderStars(review.rating)}</div>
            <p class="review-text">"${review.testimonio}"</p>
            <div class="reviewer">
                <div class="avatar" style="background: ${review.avatarColor};">${review.iniciales}</div>
                <div class="info">
                    <div class="name">${review.nombre}</div>
                    <div class="role">${review.rol} • ${review.tiempo}</div>
                    <div class="verified"><i class="fas fa-check-circle"></i> Compra verificada</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Actualizar información de paginación
    startSpan.textContent = reseñasAMostrar.length > 0 ? start + 1 : 0;
    endSpan.textContent = end;
    totalSpan.textContent = reseñasAMostrar.length;

    // Actualizar botones
    prevBtn.disabled = page === 0;
    nextBtn.disabled = end >= reseñasAMostrar.length;
}

// Eventos de paginación
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if ((currentPage + 1) * REVIEWS_PER_PAGE < reseñasAMostrar.length) {
        currentPage++;
        renderPage(currentPage);
    }
});

// ============================================================
// SISTEMA DE SELECCIÓN DE ESTRELLAS
// ============================================================
const stars = document.querySelectorAll('.rating-selector .star');
const ratingInput = document.getElementById('reviewRating');
const ratingText = document.getElementById('ratingText');

const ratingDescriptions = {
    0: 'Selecciona una calificación',
    1: '⭐ Muy malo',
    2: '⭐⭐ Malo',
    3: '⭐⭐⭐ Regular',
    4: '⭐⭐⭐⭐ Bueno',
    5: '⭐⭐⭐⭐⭐ Excelente'
};

stars.forEach(star => {
    star.addEventListener('click', function() {
        const value = parseInt(this.dataset.value);
        ratingInput.value = value;
        ratingText.textContent = ratingDescriptions[value];
        
        stars.forEach(s => {
            const starValue = parseInt(s.dataset.value);
            if (starValue <= value) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });

    star.addEventListener('mouseenter', function() {
        const value = parseInt(this.dataset.value);
        stars.forEach(s => {
            const starValue = parseInt(s.dataset.value);
            if (starValue <= value) {
                s.style.color = '#f5b342';
            } else {
                s.style.color = '#ddd';
            }
        });
    });

    star.addEventListener('mouseleave', function() {
        const selected = parseInt(ratingInput.value);
        stars.forEach(s => {
            const starValue = parseInt(s.dataset.value);
            if (starValue <= selected) {
                s.style.color = '#f5b342';
            } else {
                s.style.color = '#ddd';
            }
        });
    });
});

// ============================================================
// FORMULARIO DE RESEÑA (SIN PUBLICACIÓN AUTOMÁTICA)
// ============================================================
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('reviewNombre').value;
    const email = document.getElementById('reviewEmail').value;
    const rol = document.getElementById('reviewRol').value;
    const ciudad = document.getElementById('reviewCiudad').value;
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comentario = document.getElementById('reviewComentario').value;
    
    if (!nombre || !email || !ciudad || !comentario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    if (rating === 0) {
        alert('Por favor, selecciona una calificación con estrellas.');
        return;
    }
    
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('¡Gracias por tu reseña! 📝\n\n' +
              'Tu opinión es muy valiosa para nosotros.\n\n' +
              '✅ Tu reseña ha sido recibida correctamente.\n' +
              '🔄 Será revisada por nuestro equipo antes de publicarse.');
        
        console.log('===== NUEVA RESEÑA RECIBIDA =====');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Rol:', rol);
        console.log('Ciudad:', ciudad);
        console.log('Calificación:', rating);
        console.log('Comentario:', comentario);
        console.log('====================================');
        
        this.reset();
        ratingInput.value = 0;
        ratingText.textContent = ratingDescriptions[0];
        stars.forEach(s => s.classList.remove('active'));
        stars.forEach(s => s.style.color = '#ddd');
        
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
});

// ============================================================
// NAVEGACIÓN SUAVE
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('nav').offsetHeight;
            const topBarHeight = document.querySelector('.top-bar').offsetHeight;
            const offset = topBarHeight + navHeight + 10;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================================
// FORMULARIO DE CONTACTO
// ============================================================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('¡Mensaje enviado con éxito! Te contactaremos a la brevedad.');
        this.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
});

// ============================================================
// ENLACE ACTIVO EN NAVBAR
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('nav').offsetHeight + 80;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Renderizar primera página
renderPage(0);