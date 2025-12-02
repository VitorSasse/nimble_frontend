const categorias = [
    {
        id: 'alimentacao',
        titulo: 'Alimentação',
        descricao: 'Restaurantes, padarias, bebidas e sobremesas com entrega expressa.',
        destaques: ['Pratos quentes', 'Sobremesas e cafés', 'Mercados de bairro'],
        icone: '🍽️',
        gradiente: 'linear-gradient(135deg, #ff9a9e 0%, #f6416c 100%)'
    },
    {
        id: 'vestuario',
        titulo: 'Vestuário',
        descricao: 'Looks completos, calçados e acessórios das lojas mais próximas.',
        destaques: ['Moda casual', 'Esportivo e fitness', 'Boutiques independentes'],
        icone: '🧥',
        gradiente: 'linear-gradient(135deg, #7f7fd5 0%, #86a8e7 50%, #91eae4 100%)'
    },
    {
        id: 'casa',
        titulo: 'Casa & Limpeza',
        descricao: 'Tudo para organizar e deixar o lar sempre cheiroso e aconchegante.',
        destaques: ['Limpeza pesada', 'Decoração e aromas', 'Utilidades domésticas'],
        icone: '🏡',
        gradiente: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    },
    {
        id: 'objetos',
        titulo: 'Objetos',
        descricao: 'Gadgets, presentes criativos e itens de escritório entregues no mesmo dia.',
        destaques: ['Tech & acessórios', 'Papelaria e escritório', 'Presentes rápidos'],
        icone: '📦',
        gradiente: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)'
    }
];

const demoProdutos = [
    {
        id: 'demo-alimentacao-1',
        nome: 'Cesta Gourmet Local',
        categoria: 'alimentacao',
        preco: 89.9,
        descricao: 'Queijos frescos, geleia artesanal e pão de fermentação natural.',
        imagem: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-alimentacao-2',
        nome: 'Menu Degustação Express',
        categoria: 'alimentacao',
        preco: 74.5,
        descricao: 'Mini porções autorais prontas para entregar uma experiência completa.',
        imagem: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-alimentacao-3',
        nome: 'Smoothie Vital Fresh',
        categoria: 'alimentacao',
        preco: 32.0,
        descricao: 'Mix de frutas amarelas, gengibre e leite vegetal pronto para consumo.',
        imagem: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-vestuario-1',
        nome: 'Moletom Confort Fit',
        categoria: 'vestuario',
        preco: 159.0,
        descricao: 'Algodão orgânico com toque macio e modelagem unissex.',
        imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-vestuario-2',
        nome: 'Jaqueta Street All Weather',
        categoria: 'vestuario',
        preco: 229.0,
        descricao: 'Corta-vento impermeável com bolsos secretos e acabamento premium.',
        imagem: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-vestuario-3',
        nome: 'Tênis Urbano Flow',
        categoria: 'vestuario',
        preco: 289.0,
        descricao: 'Sola em EVA e cabedal knit respirável para o dia a dia.',
        imagem: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-casa-1',
        nome: 'Kit Organiza & Limpa',
        categoria: 'casa',
        preco: 59.9,
        descricao: 'Spray multiuso, panos de microfibra e aromatizador suave.',
        imagem: 'https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-casa-2',
        nome: 'Pack Conforto Essencial',
        categoria: 'casa',
        preco: 98.0,
        descricao: 'Difusor, vela aromática e manta leve para recarregar as energias.',
        imagem: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-casa-3',
        nome: 'Kit Aromas Naturais',
        categoria: 'casa',
        preco: 72.5,
        descricao: 'Trio de sprays para ambiente com notas de lavanda, chá branco e bambu.',
        imagem: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-objetos-1',
        nome: 'Smart Lamp Aurora',
        categoria: 'objetos',
        preco: 129.0,
        descricao: 'Luminária portátil com bateria e 8 cores para ambiente.',
        imagem: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-objetos-2',
        nome: 'Mini Projetor Pocket Beam',
        categoria: 'objetos',
        preco: 349.0,
        descricao: 'Projetor do tamanho da palma da mão com espelhamento via wifi.',
        imagem: 'https://images.unsplash.com/photo-1515472071429-68222ee0fd08?auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 'demo-objetos-3',
        nome: 'Fone Wireless Pulse',
        categoria: 'objetos',
        preco: 219.0,
        descricao: 'Cancelamento ativo de ruído e case magnético com USB-C.',
        imagem: 'https://images.unsplash.com/photo-1512058564366-c9e1d31714af?auto=format&fit=crop&w=500&q=80'
    }
];

const sellerStorageKey = 'nimble_seller_products';
const sellerSalesKey = 'nimble_seller_sales';
const clientAddressKey = 'nimble_client_address';
const ordersStorageKey = 'nimble_orders';
const conversasStorageKey = 'nimble_chat_conversas';
const mensagensStorageKey = 'nimble_chat_mensagens';
const loginEmailKey = 'nimble_login_email';
const cartItemsKey = 'nimble_cart_selection';
const cartSelectionKey = cartItemsKey;
const localSellerId = 'nimble_local_seller';

const supabaseConfig = (() => {
    if (typeof window === 'undefined') return { url: '', anonKey: '' };
    if (window.__SUPABASE) return window.__SUPABASE;
    if (window.SUPABASE_URL && window.SUPABASE_ANON_KEY) {
        return {
            url: window.SUPABASE_URL,
            anonKey: window.SUPABASE_ANON_KEY
        };
    }
    return { url: '', anonKey: '' };
})();

const pagamentosApiConfig = (() => {
    if (typeof window === 'undefined') {
        return { baseUrl: 'https://nimble-backend-1pxq.onrender.com' };
    }
    const base = window.NIMBLE_PAYMENTS_API_URL || 'https://nimble-backend-1pxq.onrender.com';
    return { baseUrl: base.replace(/\/$/, '') };
})();
let supabaseClient = null;

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;

    inicializarSaudacaoUsuario();

    if (page === 'home') inicializarHome();
    if (page === 'register') inicializarCadastro();
    if (page === 'login') inicializarLogin();
    if (page === 'profile') inicializarPerfil();
    if (page === 'cart') inicializarCarrinho();
    if (page === 'chat') inicializarChat();
});

function inicializarSaudacaoUsuario() {
    const alvoSaudacao = document.getElementById('top-bar-user');
    const logoutButton = document.getElementById('logout-button');
    if (!alvoSaudacao) return;

    const supabase = obterSupabaseClient();
    if (!supabase) {
        atualizarSaudacao(null);
        return;
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            logoutButton.disabled = true;
            logoutButton.textContent = 'Saindo...';
            try {
                await supabase.auth.signOut();
                window.location.href = 'login.html';
            } catch (err) {
                console.warn('Não foi possível encerrar a sessão.', err);
                logoutButton.disabled = false;
                logoutButton.textContent = 'Sair';
            }
        });
    }

    supabase.auth.getSession()
        .then(({ data }) => atualizarSaudacao(data.session?.user ?? null))
        .catch(() => atualizarSaudacao(null));

    supabase.auth.onAuthStateChange((_event, session) => {
        atualizarSaudacao(session?.user ?? null);
    });

    async function atualizarSaudacao(usuario) {
        if (usuario) {
            const nome = await resolverNomeSaudacao(usuario, supabase);
            alvoSaudacao.textContent = `Olá, ${nome}`;
            alvoSaudacao.dataset.state = 'logged';
            if (logoutButton) {
                logoutButton.classList.remove('hidden');
                logoutButton.disabled = false;
            }
            return;
        }
        alvoSaudacao.textContent = 'Olá, visitante';
        alvoSaudacao.dataset.state = 'guest';
        if (logoutButton) {
            logoutButton.classList.add('hidden');
        }
    }
}

async function resolverNomeSaudacao(usuario, supabase) {
    if (!usuario) return 'visitante';
    let nomeCompleto = (usuario.user_metadata?.nome || '').trim();

    if (!nomeCompleto) {
        const perfilLocal = carregarPerfilLocal(usuario.id);
        nomeCompleto = perfilLocal?.nome?.trim() || '';
    }

    if (!nomeCompleto && supabase) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('nome, telefone, perfil')
                .eq('id', usuario.id)
                .single();
            if (!error && data?.nome) {
                nomeCompleto = data.nome.trim();
                salvarPerfilLocal(usuario.id, data);
            }
        } catch {
        }
    }

    if (!nomeCompleto) {
        const emailBase = (usuario.email || '').split('@')[0];
        nomeCompleto = emailBase.replace(/[\.\_\-]+/g, ' ');
    }

    const partes = nomeCompleto.split(/\s+/).filter(Boolean);
    if (!partes.length) return 'Usuário';

    const formatar = texto => texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();

    if (partes.length >= 2) {
        return `${formatar(partes[0])} ${formatar(partes[partes.length - 1])}`;
    }

    const nomeUnico = partes[0];
    if (nomeUnico.includes('@')) {
        const prefixo = nomeUnico.split('@')[0].replace(/[\.\_\-]+/g, ' ');
        const primeiraPalavra = prefixo.split(/\s+/).filter(Boolean)[0] || 'Usuário';
        return formatar(primeiraPalavra);
    }
    return formatar(nomeUnico);
}

function inicializarHome() {
    const gallery = document.getElementById('category-gallery');
    const buttons = document.querySelectorAll('.pill');
    const searchInput = document.getElementById('search-products');

    if (!gallery) return;

    const navegarParaPerfil = categoria => {
        const destino = categoria && categoria !== 'todos'
            ? `perfil.html?categoria=${categoria}`
            : 'perfil.html';
        window.location.href = destino;
    };

    const renderCategorias = lista => {
        gallery.innerHTML = lista.map(categoria => `
            <article class="card category-card" data-category="${categoria.id}">
                <div class="category-icon" style="background:${categoria.gradiente}">
                    <span>${categoria.icone}</span>
                </div>
                <h3>${categoria.titulo}</h3>
                <p>${categoria.descricao}</p>
                <ul class="category-highlights">
                    ${categoria.destaques.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </article>
        `).join('');

        gallery.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => navegarParaPerfil(card.dataset.category));
        });
    };

    renderCategorias(categorias);

    buttons.forEach(button => {
        button.addEventListener('click', () => navegarParaPerfil(button.dataset.category));
    });

    if (searchInput) {
        searchInput.addEventListener('input', event => {
            const termo = event.target.value.toLowerCase();
            const filtradas = categorias.filter(categoria =>
                categoria.titulo.toLowerCase().includes(termo) ||
                categoria.descricao.toLowerCase().includes(termo) ||
                categoria.destaques.some(item => item.toLowerCase().includes(termo))
            );
            renderCategorias(filtradas);
        });
    }
}

function inicializarCadastro() {
    const form = document.getElementById('register-form');
    const feedback = document.getElementById('register-feedback');
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const senhaInput = document.getElementById('senha');

    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const perfilParam = params.get('perfil');
    if (perfilParam) {
        const radio = form.querySelector(`input[name="perfil"][value="${perfilParam}"]`);
        if (radio) radio.checked = true;
    }

    form.addEventListener('submit', async event => {
        event.preventDefault();
        const client = obterSupabaseClient();

        if (!client) {
            feedback.textContent = supabaseConfigValido()
                ? 'SDK do Supabase não carregou. Recarregue a página.'
                : 'Configure a URL e a anon key do Supabase em supabase-config.js.';
            feedback.style.color = '#e23a44';
            return;
        }

        const nome = nomeInput?.value.trim();
        const email = emailInput?.value.trim();
        const telefone = telefoneInput?.value.trim();
        const senha = senhaInput?.value.trim();
        const perfilSelecionado = form.querySelector('input[name="perfil"]:checked')?.value || 'cliente';

        if (!nome || !email || !senha) {
            feedback.textContent = 'Preencha nome, e-mail e senha para continuar.';
            feedback.style.color = '#e23a44';
            return;
        }

        try {
            toggleEnvio(true);
            feedback.textContent = 'Criando sua conta...';
            feedback.style.color = '#555';

            const { data, error } = await client.auth.signUp({
                email,
                password: senha,
                options: {
                    data: { nome, telefone, perfil: perfilSelecionado }
                }
            });

            if (error) {
                feedback.textContent = traduzirErroSupabase(error);
                feedback.style.color = '#e23a44';
                return;
            }

            const userId = data.user?.id || data.session?.user?.id;
            if (userId) {
                await salvarPerfilSupabase(client, {
                    id: userId,
                    nome,
                    telefone,
                    perfil: perfilSelecionado
                });
                salvarPerfilLocal(userId, { nome, telefone, perfil: perfilSelecionado });
            }

            const precisaConfirmar = !data.session;
            feedback.textContent = precisaConfirmar
                ? 'Cadastro concluído! Confirme o e-mail para ativar sua conta.'
                : 'Cadastro concluído! Redirecionando para o login...';
            feedback.style.color = '#1c8c5d';
            form.reset();

            setTimeout(() => window.location.href = 'login.html', 1200);
        } catch (err) {
            console.error('Erro no cadastro Supabase', err);
            feedback.textContent = 'Erro inesperado ao criar a conta.';
            feedback.style.color = '#e23a44';
        } finally {
            toggleEnvio(false);
        }
    });

    function toggleEnvio(pendente) {
        if (!submitButton) return;
        submitButton.disabled = pendente;
        submitButton.textContent = pendente ? 'Criando conta...' : 'Concluir cadastro';
    }
}

function inicializarLogin() {
    const form = document.getElementById('login-form');
    const feedback = document.getElementById('login-feedback');
    const emailInput = document.getElementById('login-email');
    const senhaInput = document.getElementById('login-senha');
    const lembrarInput = document.getElementById('lembrar');
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;

    if (!form) return;

    preencherEmailSalvo();

    form.addEventListener('submit', async event => {
        event.preventDefault();
        if (!emailInput || !senhaInput) return;

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();
        const lembrar = lembrarInput?.checked ?? false;
        const client = obterSupabaseClient();

        if (!client) {
            feedback.textContent = supabaseConfigValido()
                ? 'Não conseguimos carregar o SDK do Supabase.'
                : 'Configure a URL e a anon key do Supabase em scripts.js.';
            feedback.style.color = '#e23a44';
            return;
        }

        if (!email || !senha) {
            feedback.textContent = 'Informe e-mail e senha para continuar.';
            feedback.style.color = '#e23a44';
            return;
        }

        try {
            toggleEnvio(true);
            feedback.textContent = 'Conectando ao Supabase...';
            feedback.style.color = '#555';

            const { error } = await client.auth.signInWithPassword({ email, password: senha });

            if (error) {
                feedback.textContent = traduzirErroSupabase(error);
                feedback.style.color = '#e23a44';
                return;
            }

            lembrar ? localStorage.setItem(loginEmailKey, email) : localStorage.removeItem(loginEmailKey);
            const usuario = (await client.auth.getUser()).data.user;
            if (usuario?.id) {
                salvarPerfilLocal(usuario.id, {
                    nome: usuario.user_metadata?.nome || '',
                    telefone: usuario.user_metadata?.telefone || '',
                    perfil: usuario.user_metadata?.perfil || ''
                });
            }

            feedback.textContent = 'Login efetuado com sucesso! Redirecionando...';
            feedback.style.color = '#1c8c5d';
            setTimeout(() => window.location.href = 'perfil.html', 900);
        } catch (err) {
            feedback.textContent = 'Erro inesperado ao tentar fazer login.';
            feedback.style.color = '#e23a44';
            console.error(err);
        } finally {
            toggleEnvio(false);
        }
    });

    function preencherEmailSalvo() {
        try {
            const salvo = localStorage.getItem(loginEmailKey);
            if (salvo && emailInput) {
                emailInput.value = salvo;
                if (lembrarInput) lembrarInput.checked = true;
            }
        } catch {
        }
    }

    function toggleEnvio(pendente) {
        if (!submitButton) return;
        submitButton.disabled = pendente;
        submitButton.textContent = pendente ? 'Entrando...' : 'Entrar';
    }
}

function obterSupabaseClient() {
    if (supabaseClient) return supabaseClient;
    if (typeof window === 'undefined' || !window.supabase) return null;
    if (!supabaseConfigValido()) return null;

    supabaseClient = window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey, {
        auth: {
            persistSession: true,
            detectSessionInUrl: true
        }
    });
    return supabaseClient;
}

function supabaseConfigValido() {
    return Boolean(
        supabaseConfig.url &&
        supabaseConfig.anonKey
    );
}

function traduzirErroSupabase(error) {
    if (!error) return 'Erro desconhecido.';
    if (error.message === 'Invalid login credentials') {
        return 'Credenciais inválidas. Confira e-mail e senha.';
    }
    return error.message || 'Não foi possível concluir o login.';
}

async function salvarPerfilSupabase(client, registro) {
    if (!client || !registro?.id) return;
    try {
        const payload = {
            id: registro.id,
            nome: registro.nome || null,
            telefone: registro.telefone || null,
            perfil: registro.perfil || 'cliente',
            foto_url: registro.foto_url || null,
            endereco: registro.endereco || null,
            atualizado_em: new Date().toISOString()
        };
        const { error } = await client.from('profiles').upsert(payload);
        if (error) console.warn('Não foi possível salvar o perfil no Supabase.', error);
    } catch (err) {
        console.warn('Falha inesperada ao salvar perfil.', err);
    }
}

function inicializarPerfil() {
    const choiceButtons = document.querySelectorAll('.role-button');
    const choiceCards = document.querySelectorAll('.choice-card');
    const clienteSection = document.getElementById('cliente-section');
    const negocioSection = document.getElementById('negocio-section');
    const productForm = document.getElementById('product-form');
    const feedback = document.getElementById('product-feedback');
    const productSubmitButton = productForm ? productForm.querySelector('button[type="submit"]') : null;
    const productStoreAddressInput = document.getElementById('produto-endereco');
    const cancelarEdicaoButton = document.getElementById('cancelar-edicao');
    const tableBody = document.querySelector('#seller-products tbody');
    const contexto = document.getElementById('category-context');
    const contextoTitulo = document.getElementById('category-title');
    const contextoDescricao = document.getElementById('category-description');
    const contextoCliente = document.getElementById('context-client');
    const contextoSeller = document.getElementById('context-seller');
    const clientList = document.getElementById('client-product-list');
    const clientFeedback = document.getElementById('client-feedback');
    const profileForm = document.getElementById('profile-form');
    const profileFeedback = document.getElementById('profile-feedback');
    const profileNameInput = document.getElementById('profile-name');
    const profileEmailInput = document.getElementById('profile-email');
    const profilePhoneInput = document.getElementById('profile-phone');
    const profilePhotoInput = document.getElementById('profile-photo');
    const profilePhotoPreview = document.getElementById('profile-photo-preview');
    const passwordForm = document.getElementById('password-form');
    const passwordFeedback = document.getElementById('password-feedback');
    const passwordInput = document.getElementById('profile-password');
    const passwordConfirmInput = document.getElementById('profile-password-confirm');
    const ordersList = document.getElementById('client-orders-list');
    const ordersEmpty = document.getElementById('client-orders-empty');
    const refreshOrdersButton = document.getElementById('refresh-orders');
    const dashboardSection = document.getElementById('seller-dashboard');
    const refreshDashboardButton = document.getElementById('refresh-dashboard');
    const salesChartCanvas = document.getElementById('sales-chart');
    const kpiDay = document.getElementById('kpi-day');
    const kpiWeek = document.getElementById('kpi-week');
    const kpiMonth = document.getElementById('kpi-month');
    const kpiTotal = document.getElementById('kpi-total');
    const kpiDone = document.getElementById('kpi-done');
    const kpiPending = document.getElementById('kpi-pending');
    const kpiCancelled = document.getElementById('kpi-cancelled');
    const topProductsList = document.getElementById('top-products');
    const recentSalesList = document.getElementById('recent-sales');
    const orderModal = document.getElementById('order-modal');
    const orderForm = document.getElementById('order-form');
    const orderAddressInputs = orderForm ? {
        nome: document.getElementById('order-address-nome'),
        logradouro: document.getElementById('order-address-logradouro'),
        numero: document.getElementById('order-address-numero'),
        complemento: document.getElementById('order-address-complemento'),
        bairro: document.getElementById('order-address-bairro'),
        cidade: document.getElementById('order-address-cidade'),
        estado: document.getElementById('order-address-estado'),
        cep: document.getElementById('order-address-cep'),
        referencia: document.getElementById('order-address-referencia')
    } : null;
    const orderModalClose = document.getElementById('order-modal-close');
    const orderModalFeedback = document.getElementById('order-modal-feedback');
    const addressForm = document.getElementById('address-form');
    const addressFeedback = document.getElementById('address-feedback');
    const addressInputs = addressForm
        ? {
            nome: document.getElementById('endereco-nome'),
            logradouro: document.getElementById('endereco-logradouro'),
            numero: document.getElementById('endereco-numero'),
            complemento: document.getElementById('endereco-complemento'),
            bairro: document.getElementById('endereco-bairro'),
            cidade: document.getElementById('endereco-cidade'),
            estado: document.getElementById('endereco-estado'),
            cep: document.getElementById('endereco-cep'),
            referencia: document.getElementById('endereco-referencia')
        }
        : null;
    const salesList = document.getElementById('seller-sales-list');
    const salesEmpty = document.getElementById('seller-sales-empty');
    const salesTotal = document.getElementById('seller-sales-total');
    const profilePlaceholder = document.getElementById('profile-placeholder');
    const params = new URLSearchParams(window.location.search);
    const categoriaParam = params.get('categoria');

    const supabase = obterSupabaseClient();
    const supabaseDisponivel = Boolean(supabase);
    let currentUser = null;
    let produtosRemotos = [];
    let produtosLocais = supabaseDisponivel ? [] : carregarProdutosVendedor();
    let pedidosSupabase = [];
    let carregandoPedidos = false;
    let carregandoProdutos = false;
    let produtoEmEdicao = null;
    let graficoContext = null;
    let pedidoEmEdicao = null;

    renderTabela();
    renderProdutosCliente();
    renderHistoricoVendas();
    renderPedidosCliente();
    renderDashboardVendedor();

    if (supabaseDisponivel) {
        inicializarSessaoSupabase();
        carregarProdutosSupabase();
        carregarPedidosSupabase();
    } else {
        preencherPerfilUsuario();
    }

    const atualizarRole = role => {
        choiceButtons.forEach(btn => {
            const isActive = btn.dataset.role === role;
            btn.classList.toggle('active', isActive);
            const card = btn.closest('.choice-card');
            if (card) card.classList.toggle('active', isActive);
        });
        const alvo = Array.from(choiceButtons).find(btn => btn.dataset.role === role);
        if (profilePlaceholder) profilePlaceholder.classList.add('hidden');

        if (role === 'cliente') {
            clienteSection.classList.remove('hidden');
            negocioSection.classList.add('hidden');
        } else {
            clienteSection.classList.add('hidden');
            negocioSection.classList.remove('hidden');
        }
    };

    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.dataset.role;
            const targetSelector = button.dataset.target;

            atualizarRole(role);

            const targetSection = targetSelector
                ? document.querySelector(targetSelector)
                : role === 'cliente'
                    ? clienteSection
                    : negocioSection;

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    if (contextoCliente) {
        contextoCliente.addEventListener('click', () => {
            atualizarRole('cliente');
            clienteSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    if (contextoSeller) {
        contextoSeller.addEventListener('click', () => {
            atualizarRole('negocio');
            negocioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (addressForm && addressInputs) {
        preencherEnderecoCliente();
        addressForm.addEventListener('submit', event => {
            event.preventDefault();
            if (!addressFeedback) return;

            const payload = Object.keys(addressInputs).reduce((acc, campo) => {
                const input = addressInputs[campo];
                acc[campo] = (input?.value || '').trim();
                return acc;
            }, {});
            if (payload.estado) payload.estado = payload.estado.toUpperCase();

            const obrigatorios = ['nome', 'logradouro', 'numero', 'bairro', 'cidade', 'estado', 'cep'];
            const vazioObrigatorio = obrigatorios.some(campo => !payload[campo]);
            if (vazioObrigatorio) {
                addressFeedback.textContent = 'Preencha todos os campos obrigatórios.';
                addressFeedback.style.color = '#e23a44';
                return;
            }

            salvarEnderecoCliente(payload);
            preencherEnderecoCliente(payload);
            sincronizarEnderecoPerfil(payload);
            addressFeedback.textContent = 'Endereço salvo com sucesso!';
            addressFeedback.style.color = '#1c8c5d';
        });
    }

    if (orderModalClose) {
        orderModalClose.addEventListener('click', fecharModalPedido);
    }

    if (orderModal) {
        orderModal.addEventListener('click', event => {
            if (event.target === orderModal) fecharModalPedido();
        });
    }

    if (orderForm) {
        orderForm.addEventListener('submit', async event => {
            event.preventDefault();
            if (!pedidoEmEdicao || !orderAddressInputs) {
                if (orderModalFeedback) {
                    orderModalFeedback.textContent = 'Selecione um pedido para editar.';
                    orderModalFeedback.style.color = '#e23a44';
                }
                return;
            }

            const enderecoFormulario = obterEnderecoFormularioPedido();
            const camposObrigatorios = ['nome', 'logradouro', 'numero', 'bairro', 'cidade', 'estado'];
            const faltandoDados = camposObrigatorios.some(campo => !enderecoFormulario?.[campo]);

            if (faltandoDados) {
                if (orderModalFeedback) {
                    orderModalFeedback.textContent = 'Preencha os dados obrigatórios do endereço.';
                    orderModalFeedback.style.color = '#e23a44';
                }
                return;
            }

            const pedidoAtualizado = {
                ...pedidoEmEdicao,
                endereco: {
                    ...pedidoEmEdicao.endereco,
                    ...enderecoFormulario
                }
            };

            if (orderModalFeedback) {
                orderModalFeedback.textContent = 'Salvando novo endereço...';
                orderModalFeedback.style.color = '#fff';
            }

            try {
                if (supabaseDisponivel && currentUser && pedidoEmEdicao.cliente_id === currentUser.id) {
                    await atualizarPedidoSupabase(pedidoAtualizado);
                    pedidosSupabase = pedidosSupabase.map(item => item.id === pedidoAtualizado.id
                        ? { ...item, endereco: pedidoAtualizado.endereco }
                        : item
                    );
                }
                atualizarPedidoLocal(pedidoAtualizado);
                renderPedidosCliente();
                renderDashboardVendedor();
                if (orderModalFeedback) {
                    orderModalFeedback.textContent = 'Endereço atualizado com sucesso!';
                    orderModalFeedback.style.color = '#1c8c5d';
                }
                setTimeout(() => fecharModalPedido(), 600);
            } catch (err) {
                console.error('Erro ao atualizar pedido.', err);
                if (orderModalFeedback) {
                    orderModalFeedback.textContent = 'Não foi possível salvar. Tente novamente.';
                    orderModalFeedback.style.color = '#e23a44';
                }
            }
        });
    }

    if (profilePhotoInput && profilePhotoPreview) {
        profilePhotoInput.addEventListener('input', () => {
            const url = profilePhotoInput.value.trim();
            profilePhotoPreview.src = url || profilePhotoPreview.dataset.fallback || profilePhotoPreview.src;
        });
        profilePhotoPreview.dataset.fallback = profilePhotoPreview.src;
    }

    if (profileForm) {
        profileForm.addEventListener('submit', async event => {
            event.preventDefault();
            if (!profileFeedback) return;
            const nome = profileNameInput?.value.trim();
            const email = profileEmailInput?.value.trim();
            const telefone = profilePhoneInput?.value.trim();
            const foto = profilePhotoInput?.value.trim();

            if (!nome || !email) {
                profileFeedback.textContent = 'Nome e e-mail são obrigatórios.';
                profileFeedback.style.color = '#e23a44';
                return;
            }

            if (!supabaseDisponivel || !currentUser) {
                salvarPerfilLocal('cliente_local', { nome, telefone, foto_url: foto, email });
                profileFeedback.textContent = 'Dados salvos localmente.';
                profileFeedback.style.color = '#1c8c5d';
                return;
            }

            try {
                profileFeedback.textContent = 'Salvando...';
                profileFeedback.style.color = '#fff';
                await supabase.auth.updateUser({
                    email,
                    data: {
                        nome,
                        telefone,
                        foto_url: foto || null
                    }
                });
                await salvarPerfilSupabase(supabase, {
                    id: currentUser.id,
                    nome,
                    telefone,
                    perfil: 'cliente',
                    foto_url: foto || null,
                    endereco: carregarEnderecoCliente()
                });
                salvarPerfilLocal(currentUser.id, { nome, telefone, foto_url: foto, email });
                if (profilePhotoPreview && foto) {
                    profilePhotoPreview.src = foto;
                }
                profileFeedback.textContent = 'Perfil atualizado com sucesso!';
                profileFeedback.style.color = '#1c8c5d';
            } catch (err) {
                console.error('Não foi possível atualizar o perfil.', err);
                profileFeedback.textContent = 'Falha ao atualizar o perfil. Tente novamente.';
                profileFeedback.style.color = '#e23a44';
            }
        });
    }

    if (passwordForm) {
        passwordForm.addEventListener('submit', async event => {
            event.preventDefault();
            if (!passwordFeedback) return;
            const senha = passwordInput?.value.trim();
            const confirmacao = passwordConfirmInput?.value.trim();

            if (!senha || senha.length < 6) {
                passwordFeedback.textContent = 'A senha precisa ter pelo menos 6 caracteres.';
                passwordFeedback.style.color = '#e23a44';
                return;
            }

            if (senha !== confirmacao) {
                passwordFeedback.textContent = 'As senhas não conferem.';
                passwordFeedback.style.color = '#e23a44';
                return;
            }

            if (!supabaseDisponivel) {
                passwordFeedback.textContent = 'Conecte-se para alterar a senha.';
                passwordFeedback.style.color = '#e23a44';
                return;
            }

            try {
                passwordFeedback.textContent = 'Atualizando senha...';
                passwordFeedback.style.color = '#fff';
                await supabase.auth.updateUser({ password: senha });
                if (passwordInput) passwordInput.value = '';
                if (passwordConfirmInput) passwordConfirmInput.value = '';
                passwordFeedback.textContent = 'Senha alterada!';
                passwordFeedback.style.color = '#1c8c5d';
            } catch (err) {
                console.error('Erro ao alterar senha.', err);
                passwordFeedback.textContent = 'Não conseguimos alterar a senha agora.';
                passwordFeedback.style.color = '#e23a44';
            }
        });
    }

    if (categoriaParam && contexto) {
        const categoriaInfo = categorias.find(cat => cat.id === categoriaParam);
        if (categoriaInfo) {
            contexto.classList.remove('hidden');
            contextoTitulo.textContent = `${categoriaInfo.titulo} na Nimble`;
            contextoDescricao.textContent = `${categoriaInfo.descricao} Escolha se deseja comprar como cliente ou cadastrar novos produtos como parceiro.`;
            atualizarRole('cliente');
            setTimeout(() => clienteSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
        }
    }

    if (productForm) {
        productForm.addEventListener('submit', async event => {
            event.preventDefault();

            const precoValor = document.getElementById('produto-preco').value;
            const precoNumerico = Number(precoValor);
            const novoProduto = {
                nome: document.getElementById('produto-nome').value.trim(),
                descricao: document.getElementById('produto-descricao').value.trim(),
                categoria: document.getElementById('produto-categoria').value,
                preco: precoNumerico,
                imagem: document.getElementById('produto-imagem').value.trim(),
                endereco_loja: productStoreAddressInput?.value.trim() || ''
            };

            if (!novoProduto.nome || !novoProduto.descricao || !novoProduto.categoria || Number.isNaN(precoNumerico) || !novoProduto.endereco_loja) {
                feedback.textContent = 'Preencha todos os campos obrigatórios.';
                feedback.style.color = '#e23a44';
                return;
            }

            const editando = Boolean(produtoEmEdicao);
            const produtoId = produtoEmEdicao?.id;

            if (supabaseDisponivel) {
                if (!currentUser) {
                    feedback.textContent = 'Entre na sua conta para cadastrar produtos.';
                    feedback.style.color = '#e23a44';
                    return;
                }

                try {
                    toggleProdutoEnvio(true);
                    feedback.textContent = editando
                        ? 'Atualizando produto...'
                        : 'Salvando produto no Supabase...';
                    feedback.style.color = '#555';

                    const resultado = editando
                        ? await atualizarProdutoSupabase(produtoId, novoProduto)
                        : await salvarProdutoSupabase(novoProduto);

                    if (editando) {
                        produtosRemotos = produtosRemotos.map(produto =>
                            produto.id === resultado.id ? resultado : produto
                        );
                        feedback.textContent = 'Produto atualizado com sucesso!';
                    } else {
                        produtosRemotos = [resultado, ...produtosRemotos];
                        feedback.textContent = 'Produto cadastrado com sucesso!';
                    }
                    feedback.style.color = '#1c8c5d';
                    finalizarEdicaoProduto();
                    renderTabela();
                    renderProdutosCliente();
                } catch (err) {
                    console.error('Erro ao salvar produto', err);
                    feedback.textContent = 'Não foi possível salvar o produto.';
                    feedback.style.color = '#e23a44';
                } finally {
                    toggleProdutoEnvio(false);
                }
            } else {
                if (editando && produtoId) {
                    produtosLocais = produtosLocais.map(produto =>
                        produto.id === produtoId ? { ...produto, ...novoProduto } : produto
                    );
                    feedback.textContent = 'Produto atualizado com sucesso!';
                } else {
                    const produtoComId = { ...novoProduto, id: gerarIdLocal(), owner_id: localSellerId };
                    produtosLocais = [produtoComId, ...produtosLocais];
                    feedback.textContent = 'Produto cadastrado com sucesso!';
                }
                feedback.style.color = '#1c8c5d';
                salvarProdutosVendedor(produtosLocais);
                finalizarEdicaoProduto();
                renderTabela();
                renderProdutosCliente();
            }
        });

        if (cancelarEdicaoButton) {
            cancelarEdicaoButton.addEventListener('click', () => {
                finalizarEdicaoProduto();
                if (feedback) {
                    feedback.textContent = '';
                }
            });
        }

        function toggleProdutoEnvio(pendente) {
            if (!productSubmitButton) return;
            productSubmitButton.disabled = pendente;
            if (pendente) {
                productSubmitButton.textContent = 'Salvando...';
                return;
            }
            productSubmitButton.textContent = produtoEmEdicao ? 'Salvar alterações' : 'Adicionar produto';
        }
    }

    function renderTabela() {
        if (!tableBody) return;

        if (supabaseDisponivel && !currentUser) {
            tableBody.innerHTML = `<tr><td colspan="4">Faça login para visualizar seus produtos.</td></tr>`;
            return;
        }

        const dados = supabaseDisponivel ? produtosVendedorFonte() : produtosLocais;

        if (!dados.length) {
            tableBody.innerHTML = `<tr><td colspan="4">Nenhum produto cadastrado ainda.</td></tr>`;
            return;
        }

        tableBody.innerHTML = dados.map(produto => `
            <tr>
                <td>${produto.nome}</td>
                <td>${formatarCategoria(produto.categoria)}</td>
                <td>R$ ${Number(produto.preco).toFixed(2)}</td>
                <td>${produto.endereco_loja || 'Não informado'}</td>
                <td>
                    ${produto.id ? `
                        <div class="table-actions">
                            <button type="button" data-acao="editar" data-id="${produto.id}">Editar</button>
                            <button type="button" data-acao="excluir" data-id="${produto.id}">Excluir</button>
                        </div>
                    ` : ''}
                </td>
            </tr>
        `).join('');

        anexarEventosTabela(dados);
    }

    function anexarEventosTabela(dados) {
        if (!tableBody) return;
        tableBody.querySelectorAll('button[data-acao]').forEach(button => {
            const acao = button.dataset.acao;
            const id = button.dataset.id;
            if (!acao || !id) return;
            const produto = dados.find(item => String(item.id) === id);
            if (!produto) return;

            if (acao === 'editar') {
                button.addEventListener('click', () => iniciarEdicaoProduto(produto));
            }

            if (acao === 'excluir') {
                button.addEventListener('click', () => removerProduto(produto));
            }
        });
    }

    function renderProdutosCliente() {
        if (!clientList) return;

        const fonte = produtosClienteFonte();
        const filtrados = categoriaParam
            ? fonte.filter(produto => produto.categoria === categoriaParam)
            : fonte;

        const fallbackDemo = categoriaParam
            ? demoProdutos.filter(produto => produto.categoria === categoriaParam)
            : demoProdutos;

        const listaParaExibir = filtrados.length ? filtrados : fallbackDemo;

        if (!listaParaExibir.length) {
            clientList.innerHTML = `
                <div class="client-empty-state">
                    Nenhum produto encontrado no momento. Volte em breve!
                </div>
            `;
            if (clientFeedback) clientFeedback.textContent = '';
            return;
        }

        if (!filtrados.length && clientFeedback) {
            clientFeedback.textContent = 'Mostrando sugestões para esta categoria.';
            clientFeedback.style.color = '#cfd8ff';
        }

        clientList.innerHTML = listaParaExibir.map(produto => `
            <article class="client-product-card">
                <img src="${produto.imagem || 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80'}" alt="${produto.nome}">
                <strong>${produto.nome}</strong>
                <small>${formatarCategoria(produto.categoria)}</small>
                <p>${produto.descricao}</p>
                <span>R$ ${Number(produto.preco).toFixed(2)}</span>
                <button class="primary" data-produto="${produto.nome}">Quero este</button>
            </article>
        `).join('');

        clientList.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                const produto = listaParaExibir[index];
                adicionarProdutoAoCarrinho(produto, categoriaParam);
            });
        });
    }

    async function preencherPerfilUsuario() {
        if (!profileForm) return;
        let dados = null;

        if (supabaseDisponivel) {
            try {
                const { data } = await supabase.auth.getUser();
                const usuario = data.user;
                if (usuario) {
                    dados = {
                        nome: usuario.user_metadata?.nome || '',
                        email: usuario.email || '',
                        telefone: usuario.user_metadata?.telefone || '',
                        foto_url: usuario.user_metadata?.foto_url || '',
                        endereco: usuario.user_metadata?.endereco || null
                    };
                    if (usuario.id) {
                        salvarPerfilLocal(usuario.id, {
                            nome: dados.nome,
                            telefone: dados.telefone,
                            foto_url: dados.foto_url,
                            email: dados.email,
                            endereco: dados.endereco
                        });
                    }
                }
            } catch (err) {
                console.warn('Não foi possível carregar o perfil do usuário.', err);
            }
        }

        if (!dados && currentUser?.id) {
            dados = carregarPerfilLocal(currentUser.id);
        }

        if (!dados) {
            dados = carregarPerfilLocal('cliente_local');
        }

        if (dados?.nome && profileNameInput) profileNameInput.value = dados.nome;
        if (dados?.email && profileEmailInput) profileEmailInput.value = dados.email;
        if (dados?.telefone && profilePhoneInput) profilePhoneInput.value = dados.telefone;
        if (profilePhotoInput && dados?.foto_url) profilePhotoInput.value = dados.foto_url;
        if (profilePhotoPreview && dados?.foto_url) profilePhotoPreview.src = dados.foto_url;
        if (dados?.endereco) preencherEnderecoCliente(dados.endereco);
    }

    async function sincronizarEnderecoPerfil(endereco) {
        if (!endereco) return;
        if (supabaseDisponivel && currentUser) {
            try {
                await supabase.auth.updateUser({
                    data: { endereco }
                });
                await salvarPerfilSupabase(supabase, {
                    id: currentUser.id,
                    nome: profileNameInput?.value.trim() || currentUser.email,
                    telefone: profilePhoneInput?.value.trim(),
                    perfil: 'cliente',
                    foto_url: profilePhotoInput?.value.trim() || null,
                    endereco
                });
                salvarPerfilLocal(currentUser.id, {
                    nome: profileNameInput?.value.trim(),
                    telefone: profilePhoneInput?.value.trim(),
                    foto_url: profilePhotoInput?.value.trim(),
                    endereco
                });
            } catch (err) {
                console.warn('Não foi possível sincronizar o endereço.', err);
            }
        } else {
            salvarPerfilLocal('cliente_local', {
                nome: profileNameInput?.value.trim(),
                telefone: profilePhoneInput?.value.trim(),
                foto_url: profilePhotoInput?.value.trim(),
                endereco
            });
        }
    }

    function preencherEnderecoCliente(enderecoParametro) {
        if (!addressInputs) return;
        const endereco = enderecoParametro || carregarEnderecoCliente();
        if (!endereco) return;
        Object.entries(addressInputs).forEach(([campo, input]) => {
            if (!input) return;
            input.value = endereco[campo] || '';
        });
    }

    function renderHistoricoVendas() {
        if (!salesList) return;

        if (supabaseDisponivel && !currentUser) {
            salesList.innerHTML = '';
            if (salesTotal) salesTotal.textContent = '';
            if (salesEmpty) {
                salesEmpty.textContent = 'Entre na sua conta para acompanhar as vendas.';
                salesEmpty.classList.remove('hidden');
            }
            return;
        }

        const sellerId = supabaseDisponivel && currentUser ? currentUser.id : localSellerId;
        const historico = carregarHistoricoVendas();
        const vendas = historico.filter(venda => venda?.owner_id === sellerId);

        if (!vendas.length) {
            salesList.innerHTML = '';
            if (salesTotal) salesTotal.textContent = '';
            if (salesEmpty) {
                salesEmpty.textContent = 'Ainda não registramos vendas para seus produtos.';
                salesEmpty.classList.remove('hidden');
            }
            return;
        }

        if (salesEmpty) salesEmpty.classList.add('hidden');

        if (salesTotal) {
            const total = vendas.reduce((acc, venda) => acc + Number(venda.total || 0), 0);
            salesTotal.textContent = `Total registrado: R$ ${total.toFixed(2)}`;
        }

        salesList.innerHTML = vendas.map(venda => {
            const data = new Date(venda.registrado_em);
            const dataFormatada = data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
            const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            const destino = formatarEnderecoCurto(venda.endereco);
            const statusFormatado = venda.status ? formatarStatusPedido(venda.status) : '';
            return `
                <li>
                    <div class="seller-sales-info">
                        <strong>${venda.nome}</strong>
                        <span>${formatarCategoria(venda.categoria)}</span>
                    </div>
                    <div class="seller-sales-meta">
                        <span>${venda.quantidade} un.</span>
                        <span>R$ ${Number(venda.total || 0).toFixed(2)}</span>
                    </div>
                    ${statusFormatado ? `<span class="seller-sales-status">${statusFormatado}</span>` : ''}
                    ${destino ? `<div class="seller-sales-address">${destino}</div>` : ''}
                    <div class="seller-sales-time">${dataFormatada} · ${hora}</div>
                </li>
            `;
        }).join('');
    }

    window.addEventListener('storage', event => {
        if (event.key === sellerSalesKey) {
            renderHistoricoVendas();
        }
    });

    function obterPedidoPorId(id) {
        if (!id) return null;
        const locais = carregarPedidos();
        const localEncontrado = locais.find(pedido => pedido.id === id);
        if (localEncontrado) return localEncontrado;
        const remoto = pedidosSupabase.find(pedido => pedido.id === id);
        return remoto || null;
    }

    async function renderPedidosCliente() {
        if (!ordersList) return;

        if (supabaseDisponivel && !currentUser) {
            ordersList.innerHTML = '';
            if (ordersEmpty) {
                ordersEmpty.textContent = 'Faça login para visualizar seus pedidos.';
                ordersEmpty.classList.remove('hidden');
            }
            return;
        }

        const clienteAtual = currentUser?.id || 'cliente_local';
        let pedidosFonte = [];

        if (supabaseDisponivel && currentUser) {
            pedidosFonte = pedidosSupabase.filter(pedido => pedido.cliente_id === currentUser.id);
            if (!pedidosFonte.length) {
                pedidosFonte = carregarPedidos().filter(pedido => pedido.cliente_id === clienteAtual);
            }
        } else {
            pedidosFonte = carregarPedidos().filter(pedido => pedido.cliente_id === clienteAtual);
        }

        if (!pedidosFonte.length) {
            ordersList.innerHTML = '';
            if (ordersEmpty) {
                ordersEmpty.textContent = 'Nenhum pedido encontrado por enquanto.';
                ordersEmpty.classList.remove('hidden');
            }
            return;
        }

        if (ordersEmpty) ordersEmpty.classList.add('hidden');

        ordersList.innerHTML = pedidosFonte.slice(0, 5).map(pedido => {
            const enderecoCompleto = formatarEnderecoCompleto(pedido.endereco);
            const mapsUrl = gerarLinkGoogleMaps(pedido.endereco);
            const produtosResumo = pedido.itens
                .map(item => item.nome)
                .slice(0, 3)
                .join(', ') + (pedido.itens.length > 3 ? '...' : '');
            return `
                <li class="client-orders-item">
                    <div class="client-orders-meta">
                        <strong>Pedido ${pedido.id.slice(0, 8)}</strong>
                        <span>${new Date(pedido.criado_em).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div class="client-orders-products">${produtosResumo || 'Itens variados'}</div>
                    <div class="client-orders-meta">
                        <span>Total: R$ ${Number(pedido.total || 0).toFixed(2)}</span>
                        <span class="client-orders-status">${formatarStatusPedido(pedido.status)}</span>
                    </div>
                    <div class="client-orders-address">
                        <p>${enderecoCompleto || 'Endereço não informado.'}</p>
                        ${mapsUrl ? `<a href="${mapsUrl}" target="_blank" rel="noopener" class="link-inline">Abrir no Maps</a>` : ''}
                    </div>
                    <div class="client-orders-actions">
                        <button type="button" class="link-inline client-order-edit" data-order="${pedido.id}">Editar</button>
                        <button type="button" class="link-inline danger client-order-delete" data-order="${pedido.id}">Excluir</button>
                    </div>
                </li>
            `;
        }).join('');

        ordersList.querySelectorAll('.client-order-edit').forEach(button => {
            button.addEventListener('click', () => abrirModalPedido(button.dataset.order));
        });

        ordersList.querySelectorAll('.client-order-delete').forEach(button => {
            button.addEventListener('click', () => removerPedidoCliente(button.dataset.order));
        });
    }

    function preencherFormularioEnderecoPedido(pedido) {
        if (!orderAddressInputs) return;
        const baseEndereco = pedido?.endereco || carregarEnderecoCliente() || {};
        Object.entries(orderAddressInputs).forEach(([campo, input]) => {
            if (!input) return;
            const valor = baseEndereco[campo];
            input.value = campo === 'estado'
                ? (valor || '').toUpperCase()
                : (valor ?? '');
        });
    }

    function obterEnderecoFormularioPedido() {
        if (!orderAddressInputs) return null;
        const endereco = {};
        Object.entries(orderAddressInputs).forEach(([campo, input]) => {
            endereco[campo] = (input?.value || '').trim();
        });
        if (endereco.estado) endereco.estado = endereco.estado.toUpperCase();
        return endereco;
    }

    function abrirModalPedido(pedidoId) {
        const pedido = typeof pedidoId === 'object' ? pedidoId : obterPedidoPorId(pedidoId);
        if (!pedido || !orderModal) return;
        pedidoEmEdicao = pedido;
        preencherFormularioEnderecoPedido(pedido);
        if (orderModalFeedback) orderModalFeedback.textContent = '';
        orderModal.setAttribute('aria-hidden', 'false');
    }

    function fecharModalPedido() {
        pedidoEmEdicao = null;
        if (orderModal) orderModal.setAttribute('aria-hidden', 'true');
        if (orderForm) orderForm.reset();
        if (orderModalFeedback) orderModalFeedback.textContent = '';
    }

    async function removerPedidoCliente(pedidoId) {
        const pedido = obterPedidoPorId(pedidoId);
        if (!pedido) return;
        const confirmar = window.confirm('Deseja realmente excluir este pedido?');
        if (!confirmar) return;
        try {
            if (supabaseDisponivel && currentUser && pedido.cliente_id === currentUser.id) {
                await excluirPedidoSupabase(pedido.id);
                pedidosSupabase = pedidosSupabase.filter(item => item.id !== pedido.id);
            }
        } catch (err) {
            console.warn('Não foi possível excluir o pedido no Supabase.', err);
        } finally {
            removerPedidoLocal(pedido.id);
            renderPedidosCliente();
            renderDashboardVendedor();
            if (pedidoEmEdicao?.id === pedido.id) fecharModalPedido();
        }
    }

    function renderDashboardVendedor() {
        if (!dashboardSection || !kpiDay) return;
        const vendedorId = currentUser?.id || (!supabaseDisponivel ? localSellerId : null);
        if (!vendedorId) {
            dashboardSection.classList.add('disabled');
            if (topProductsList) topProductsList.innerHTML = '<li>Faça login para visualizar os dados.</li>';
            if (recentSalesList) recentSalesList.innerHTML = '';
            desenharGraficoVendas([]);
            return;
        }

        dashboardSection.classList.remove('disabled');
        const pedidos = obterPedidosVendedor(vendedorId);

        if (!pedidos.length) {
            [kpiDay, kpiWeek, kpiMonth, kpiDone, kpiPending, kpiCancelled].forEach(elemento => {
                if (elemento) elemento.textContent = '0';
            });
            if (kpiTotal) kpiTotal.textContent = 'R$ 0,00';
            if (topProductsList) topProductsList.innerHTML = '<li>Nenhuma venda registrada.</li>';
            if (recentSalesList) recentSalesList.innerHTML = '<li>Sem vendas recentes.</li>';
            desenharGraficoVendas([]);
            return;
        }

        const metricas = calcularMetricasVendedor(pedidos, vendedorId);
        if (kpiDay) kpiDay.textContent = metricas.vendasDia.toString();
        if (kpiWeek) kpiWeek.textContent = metricas.vendasSemana.toString();
        if (kpiMonth) kpiMonth.textContent = metricas.vendasMes.toString();
        if (kpiTotal) kpiTotal.textContent = `R$ ${metricas.totalFaturado.toFixed(2)}`;
        if (kpiDone) kpiDone.textContent = metricas.totalConcluidos.toString();
        if (kpiPending) kpiPending.textContent = metricas.totalPendentes.toString();
        if (kpiCancelled) kpiCancelled.textContent = metricas.totalCancelados.toString();

        if (topProductsList) {
            topProductsList.innerHTML = metricas.topProdutos.length
                ? metricas.topProdutos.map(item => `
                    <li>
                        <strong>${item.nome}</strong>
                        <span>${item.quantidade} un. • R$ ${item.total.toFixed(2)}</span>
                    </li>
                `).join('')
                : '<li>Nenhum produto vendido ainda.</li>';
        }

        if (recentSalesList) {
            recentSalesList.innerHTML = metricas.vendasRecentes.length
                ? metricas.vendasRecentes.map(venda => `
                    <li>
                        <strong>Pedido ${venda.id.slice(0, 8)}</strong>
                        <span>${new Date(venda.data).toLocaleDateString('pt-BR')} · R$ ${venda.total.toFixed(2)}</span>
                        <small class="client-orders-status">${formatarStatusPedido(venda.status)}</small>
                    </li>
                `).join('')
                : '<li>Sem vendas recentes.</li>';
        }

        desenharGraficoVendas(metricas.series);
    }

    document.addEventListener('nimble:pedido-registrado', event => {
        const pedido = event.detail;
        if (!pedido) return;
        if (supabaseDisponivel && currentUser && pedido.cliente_id === currentUser.id) {
            pedidosSupabase = [pedido, ...pedidosSupabase];
        }
        renderPedidosCliente();
        renderDashboardVendedor();
    });

    function obterPedidosVendedor(vendedorId) {
        if (!vendedorId) return [];
        const fonte = supabaseDisponivel ? pedidosSupabase : carregarPedidos();
        return fonte.filter(pedido =>
            pedido?.itens?.some(item => (item.owner_id || localSellerId) === vendedorId)
        );
    }

    function calcularMetricasVendedor(pedidos, vendedorId) {
        const hoje = new Date();
        const inicioSemana = new Date(hoje);
        inicioSemana.setDate(hoje.getDate() - hoje.getDay());
        const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);

        const series = Array.from({ length: 7 }).map((_, index) => {
            const data = new Date(hoje);
            data.setDate(hoje.getDate() - (6 - index));
            return {
                key: data.toISOString().slice(0, 10),
                label: data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
                valor: 0
            };
        });

        const topProdutos = {};
        const vendasRecentes = [];
        let vendasDia = 0;
        let vendasSemana = 0;
        let vendasMes = 0;
        let totalFaturado = 0;
        let totalConcluidos = 0;
        let totalPendentes = 0;
        let totalCancelados = 0;

        pedidos.forEach(pedido => {
            const dataPedido = pedido.criado_em ? new Date(pedido.criado_em) : new Date();
            const itens = pedido.itens?.filter(item => (item.owner_id || localSellerId) === vendedorId) || [];
            if (!itens.length) return;
            const valorPedido = itens.reduce((acc, item) => acc + Number(item.preco || 0) * (item.quantidade || 1), 0);
            if (!valorPedido) return;

            if (isSameDay(dataPedido, hoje)) vendasDia += 1;
            if (isSameWeek(dataPedido, inicioSemana)) vendasSemana += 1;
            if (isSameMonth(dataPedido, inicioMes)) vendasMes += 1;

            totalFaturado += valorPedido;

            const status = (pedido.status || 'processando').toLowerCase();
            if (['pago', 'confirmado', 'enviado', 'completo', 'finalizado'].includes(status)) {
                totalConcluidos += 1;
            } else if (['cancelado', 'recusado'].includes(status)) {
                totalCancelados += 1;
            } else {
                totalPendentes += 1;
            }

            const chaveDia = dataPedido.toISOString().slice(0, 10);
            const ponto = series.find(item => item.key === chaveDia);
            if (ponto) ponto.valor += valorPedido;

            itens.forEach(item => {
                const chave = item.id || item.nome;
                if (!topProdutos[chave]) {
                    topProdutos[chave] = { nome: item.nome || 'Produto', quantidade: 0, total: 0 };
                }
                topProdutos[chave].quantidade += item.quantidade || 1;
                topProdutos[chave].total += Number(item.preco || 0) * (item.quantidade || 1);
            });

            vendasRecentes.push({
                id: pedido.id,
                total: valorPedido,
                data: dataPedido,
                status
            });
        });

        return {
            vendasDia,
            vendasSemana,
            vendasMes,
            totalFaturado,
            totalConcluidos,
            totalPendentes,
            totalCancelados,
            topProdutos: Object.values(topProdutos)
                .sort((a, b) => b.total - a.total)
                .slice(0, 5),
            vendasRecentes: vendasRecentes.sort((a, b) => b.data - a.data).slice(0, 5),
            series: series.map(item => ({ label: item.label, valor: item.valor }))
        };
    }

    function desenharGraficoVendas(series) {
        if (!salesChartCanvas) return;
        const ctx = salesChartCanvas.getContext('2d');
        if (!ctx) return;
        const width = salesChartCanvas.clientWidth || 400;
        const height = salesChartCanvas.clientHeight || 200;
        const ratio = window.devicePixelRatio || 1;
        salesChartCanvas.width = width * ratio;
        salesChartCanvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        ctx.clearRect(0, 0, width, height);

        if (!series.length) return;
        const valores = series.map(item => item.valor);
        const maxValor = Math.max(...valores, 10);
        const padding = 24;
        const barWidth = (width - padding * 2) / series.length;

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();

        series.forEach((item, index) => {
            const altura = (item.valor / maxValor) * (height - padding * 2);
            const x = padding + index * barWidth + barWidth * 0.2;
            const y = height - padding - altura;
            const largura = barWidth * 0.6;
            ctx.fillStyle = 'rgba(255, 95, 112, 0.8)';
            ctx.fillRect(x, y, largura, Math.max(altura, 2));
            ctx.fillStyle = 'rgba(255,255,255,0.75)';
            ctx.font = '10px "Inter", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(item.label, x + largura / 2, height - padding / 2 + 8);
        });
    }

    function isSameDay(a, b) {
        return a.getDate() === b.getDate() &&
            a.getMonth() === b.getMonth() &&
            a.getFullYear() === b.getFullYear();
    }

    function isSameWeek(data, inicioSemana) {
        const inicio = new Date(inicioSemana);
        const fim = new Date(inicioSemana);
        fim.setDate(fim.getDate() + 7);
        return data >= inicio && data < fim;
    }

    function isSameMonth(data, inicioMes) {
        return data.getFullYear() === inicioMes.getFullYear() &&
            data.getMonth() === inicioMes.getMonth();
    }

    async function carregarPedidosSupabase() {
        if (!supabaseDisponivel || carregandoPedidos) return;
        carregandoPedidos = true;
        try {
            const { data, error } = await supabase
                .from('pedidos')
                .select('id, cliente_id, itens, total, status, endereco, criado_em')
                .order('criado_em', { ascending: false });
            if (error) throw error;
            pedidosSupabase = data || [];
            renderPedidosCliente();
            renderDashboardVendedor();
        } catch (err) {
            console.warn('Não foi possível carregar pedidos do Supabase.', err);
        } finally {
            carregandoPedidos = false;
        }
    }

    if (refreshOrdersButton) {
        refreshOrdersButton.addEventListener('click', async () => {
            if (refreshOrdersButton.dataset.state === 'loading') return;
            const original = refreshOrdersButton.textContent;
            refreshOrdersButton.dataset.state = 'loading';
            refreshOrdersButton.disabled = true;
            refreshOrdersButton.textContent = 'Atualizando...';
            try {
                if (supabaseDisponivel) {
                    await carregarPedidosSupabase();
                } else {
                    renderPedidosCliente();
                }
            } finally {
                refreshOrdersButton.disabled = false;
                refreshOrdersButton.textContent = original;
                refreshOrdersButton.dataset.state = 'idle';
            }
        });
    }

    if (refreshDashboardButton) {
        refreshDashboardButton.addEventListener('click', async () => {
            if (refreshDashboardButton.dataset.state === 'loading') return;
            const original = refreshDashboardButton.textContent;
            refreshDashboardButton.dataset.state = 'loading';
            refreshDashboardButton.disabled = true;
            refreshDashboardButton.textContent = 'Atualizando...';
            try {
                if (supabaseDisponivel) {
                    await carregarPedidosSupabase();
                } else {
                    renderDashboardVendedor();
                }
            } finally {
                refreshDashboardButton.disabled = false;
                refreshDashboardButton.textContent = original;
                refreshDashboardButton.dataset.state = 'idle';
            }
        });
    }

    function iniciarEdicaoProduto(produto) {
        if (!productForm || !produto) return;
        produtoEmEdicao = produto;
        const nomeInput = document.getElementById('produto-nome');
        const descricaoInput = document.getElementById('produto-descricao');
        const categoriaInput = document.getElementById('produto-categoria');
        const precoInput = document.getElementById('produto-preco');
        const imagemInput = document.getElementById('produto-imagem');
        const enderecoInput = document.getElementById('produto-endereco');

        if (nomeInput) nomeInput.value = produto.nome || '';
        if (descricaoInput) descricaoInput.value = produto.descricao || '';
        if (categoriaInput) categoriaInput.value = produto.categoria || '';
        if (precoInput) precoInput.value = Number(produto.preco || 0).toFixed(2);
        if (imagemInput) imagemInput.value = produto.imagem || '';
        if (enderecoInput) enderecoInput.value = produto.endereco_loja || '';

        if (productSubmitButton) {
            productSubmitButton.textContent = 'Salvar alterações';
        }
        if (cancelarEdicaoButton) {
            cancelarEdicaoButton.classList.remove('hidden');
        }
        productForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function finalizarEdicaoProduto() {
        if (!productForm) return;
        produtoEmEdicao = null;
        productForm.reset();
        if (productSubmitButton) {
            productSubmitButton.textContent = 'Adicionar produto';
            productSubmitButton.disabled = false;
        }
        if (cancelarEdicaoButton) {
            cancelarEdicaoButton.classList.add('hidden');
        }
    }

    async function removerProduto(produto) {
        if (!produto?.id) return;
        const confirmacao = window.confirm(`Deseja remover "${produto.nome}"?`);
        if (!confirmacao) return;

        if (supabaseDisponivel) {
            if (!currentUser) {
                feedback.textContent = 'Faça login para gerenciar produtos.';
                feedback.style.color = '#e23a44';
                return;
            }

            try {
                feedback.textContent = 'Removendo produto...';
                feedback.style.color = '#555';
                await excluirProdutoSupabase(produto.id);
                produtosRemotos = produtosRemotos.filter(item => item.id !== produto.id);
                if (produtoEmEdicao?.id === produto.id) {
                    finalizarEdicaoProduto();
                }
                feedback.textContent = 'Produto removido com sucesso!';
                feedback.style.color = '#1c8c5d';
                renderTabela();
                renderProdutosCliente();
            } catch (err) {
                console.error('Erro ao remover produto', err);
                feedback.textContent = 'Não foi possível remover o produto.';
                feedback.style.color = '#e23a44';
            }
            return;
        }

        produtosLocais = produtosLocais.filter(item => item.id !== produto.id);
        salvarProdutosVendedor(produtosLocais);
        if (produtoEmEdicao?.id === produto.id) {
            finalizarEdicaoProduto();
        }
        feedback.textContent = 'Produto removido com sucesso!';
        feedback.style.color = '#1c8c5d';
        renderTabela();
        renderProdutosCliente();
    }

    function produtosClienteFonte() {
        if (supabaseDisponivel) {
            return produtosRemotos.length ? produtosRemotos : demoProdutos;
        }
        return produtosLocais.length ? produtosLocais : demoProdutos;
    }

    function produtosVendedorFonte() {
        if (!supabaseDisponivel) return produtosLocais;
        if (!currentUser) return [];
        return produtosRemotos.filter(produto => produto.owner_id === currentUser.id);
    }

    async function inicializarSessaoSupabase() {
        try {
            const { data } = await supabase.auth.getSession();
            currentUser = data.session?.user ?? null;
            atualizarEstadoFormNegocio();
            renderTabela();
            renderHistoricoVendas();
            renderPedidosCliente();
            renderDashboardVendedor();
            preencherPerfilUsuario();
        } catch (err) {
            console.warn('Não foi possível recuperar a sessão atual.', err);
        }

        supabase.auth.onAuthStateChange((_event, session) => {
            currentUser = session?.user ?? null;
            atualizarEstadoFormNegocio();
            renderTabela();
            renderHistoricoVendas();
            if (currentUser) {
                carregarPedidosSupabase();
                preencherPerfilUsuario();
            } else {
                renderPedidosCliente();
            }
            renderDashboardVendedor();
        });
    }

    function atualizarEstadoFormNegocio() {
        if (!productForm || !supabaseDisponivel) return;
        const bloqueado = !currentUser;
        productForm.querySelectorAll('input, textarea, select, button').forEach(elemento => {
            if (bloqueado) {
                elemento.setAttribute('disabled', 'disabled');
            } else {
                elemento.removeAttribute('disabled');
            }
        });
        if (!feedback) return;
        if (bloqueado) {
            feedback.textContent = 'Entre na sua conta para cadastrar produtos.';
            feedback.style.color = '#e23a44';
        } else {
            feedback.textContent = '';
        }
    }

    async function carregarProdutosSupabase() {
        if (!supabaseDisponivel || carregandoProdutos) return;
        carregandoProdutos = true;
        try {
        const { data, error } = await supabase
            .from('produtos')
            .select('id, nome, descricao, categoria, preco, imagem, owner_id, endereco_loja, created_at')
                .order('created_at', { ascending: false });

            if (error) throw error;
            produtosRemotos = data || [];
            renderTabela();
            renderProdutosCliente();
        } catch (err) {
            console.error('Erro ao carregar produtos do Supabase.', err);
            if (clientFeedback) {
                clientFeedback.textContent = 'Não foi possível carregar os produtos agora.';
                clientFeedback.style.color = '#e23a44';
            }
        } finally {
            carregandoProdutos = false;
        }
    }

    async function salvarProdutoSupabase(produto) {
        const payload = {
            nome: produto.nome,
            descricao: produto.descricao,
            categoria: produto.categoria,
            preco: produto.preco,
            imagem: produto.imagem || null,
            endereco_loja: produto.endereco_loja || null,
            owner_id: currentUser.id
        };

        const { data, error } = await supabase
            .from('produtos')
            .insert(payload)
            .select('id, nome, descricao, categoria, preco, imagem, owner_id, endereco_loja, created_at')
            .single();

        if (error) throw error;
        return data;
    }

    async function atualizarProdutoSupabase(produtoId, produto) {
        const payload = {
            nome: produto.nome,
            descricao: produto.descricao,
            categoria: produto.categoria,
            preco: produto.preco,
            imagem: produto.imagem || null,
            endereco_loja: produto.endereco_loja || null,
            owner_id: currentUser.id
        };

        const { data, error } = await supabase
            .from('produtos')
            .update(payload)
            .eq('id', produtoId)
            .eq('owner_id', currentUser.id)
            .select('id, nome, descricao, categoria, preco, imagem, owner_id, endereco_loja, created_at')
            .single();

        if (error) throw error;
        return data;
    }

    async function excluirProdutoSupabase(produtoId) {
        const { error } = await supabase
            .from('produtos')
            .delete()
            .eq('id', produtoId)
            .eq('owner_id', currentUser.id);

        if (error) throw error;
    }
}

function formatarCategoria(valor) {
    if (valor === 'alimentacao') return 'Alimentação';
    if (valor === 'vestuario') return 'Vestuário';
    if (valor === 'casa') return 'Casa & Limpeza';
    if (valor === 'objetos') return 'Objetos';
    return valor;
}

function formatarStatusPedido(status) {
    if (!status) return '';
    const mapa = {
        pago: 'Pagamento aprovado',
        aguardando_pagamento: 'Aguardando pagamento',
        processando: 'Processando',
        confirmado: 'Pedido confirmado',
        enviado: 'Pedido enviado'
    };
    return mapa[status] || status;
}

function formatarEnderecoCurto(endereco) {
    if (!endereco) return '';
    const rua = endereco.logradouro
        ? `${endereco.logradouro}${endereco.numero ? `, ${endereco.numero}` : ''}`
        : '';
    const bairro = endereco.bairro || '';
    const cidadeEstado = endereco.cidade || endereco.estado
        ? `${endereco.cidade || ''}${endereco.estado ? `/${endereco.estado.toUpperCase()}` : ''}`
        : '';
    const cep = endereco.cep ? `CEP ${endereco.cep}` : '';
    return [rua, bairro, cidadeEstado, cep].filter(Boolean).join(' • ');
}

function formatarEnderecoCompleto(endereco) {
    if (!endereco) return '';
    const linha1 = endereco.logradouro
        ? `${endereco.logradouro}${endereco.numero ? `, ${endereco.numero}` : ''}`
        : '';
    const linha2 = endereco.bairro ? `${endereco.bairro}` : '';
    const linha3 = endereco.cidade
        ? `${endereco.cidade}${endereco.estado ? `/${endereco.estado.toUpperCase()}` : ''}`
        : '';
    const complemento = endereco.complemento ? `Complemento: ${endereco.complemento}` : '';
    const cep = endereco.cep ? `CEP ${endereco.cep}` : '';
    return [linha1, linha2, linha3, complemento, cep].filter(Boolean).join(' • ');
}

const cidadesAtendidas = ['balneario picarras', 'balneário piçarras', 'penha', 'barra velha'];

function detectarTipoChavePix(chave) {
    if (!chave) return 'aleatoria';
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chave)) return 'email';
    if (/^\d{11}$/.test(chave)) return 'cpf';
    if (/^\d{14}$/.test(chave)) return 'cnpj';
    if (/^\+?\d{11,13}$/.test(chave)) return 'telefone';
    return 'aleatoria';
}

function gerarPayloadPixEstatica(chave, valor, nomePagador = '') {
    const nome = normalizarTextoPix(nomePagador || 'Cliente Nimble').slice(0, 25).toUpperCase() || 'CLIENTE NIMBLE';
    const cidade = 'SAO PAULO';
    const format = (id, value) => `${id}${String(value.length).padStart(2, '0')}${value}`;
    const gui = format('00', 'BR.GOV.BCB.PIX');
    const chaveCampo = format('01', chave);
    const merchantAccountInfo = format('26', `${gui}${chaveCampo}`);
    const valorCampo = valor > 0 ? format('54', valor.toFixed(2)) : '';
    const nomeCampo = format('59', nome);
    const cidadeCampo = format('60', cidade);
    const dadosAdicionais = format('62', format('05', '***'));

    const payloadSemCRC = [
        '000201',
        '010211',
        merchantAccountInfo,
        '52040000',
        '5303986',
        valorCampo,
        '5802BR',
        nomeCampo,
        cidadeCampo,
        dadosAdicionais
    ].filter(Boolean).join('');

    const crc = calcularCRC16(payloadSemCRC + '6304');
    return `${payloadSemCRC}6304${crc}`;
}

function normalizarTextoPix(texto) {
    if (!texto) return '';
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9\s]/g, '');
}

function calcularCRC16(payload) {
    let crc = 0xFFFF;
    const polinomio = 0x1021;
    for (let i = 0; i < payload.length; i += 1) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j += 1) {
            if ((crc & 0x8000) !== 0) {
                crc = (crc << 1) ^ polinomio;
            } else {
                crc <<= 1;
            }
            crc &= 0xFFFF;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

function gerarLinkGoogleMaps(endereco) {
    if (!endereco) return '';
    const query = [
        endereco.logradouro,
        endereco.numero,
        endereco.bairro,
        endereco.cidade,
        endereco.estado
    ].filter(Boolean).join(' ');
    return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : '';
}

function carregarEnderecoCliente() {
    try {
        const raw = localStorage.getItem(clientAddressKey);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function cidadeAtendida(cidade) {
    if (!cidade) return false;
    const normalizada = cidade.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return cidadesAtendidas.some(permitida => normalizada.includes(permitida));
}

function salvarEnderecoCliente(endereco) {
    try {
        localStorage.setItem(clientAddressKey, JSON.stringify(endereco));
    } catch {
    }
}

function carregarProdutosVendedor() {
    try {
        const data = localStorage.getItem(sellerStorageKey);
        if (!data) return [];
        const listaBruta = JSON.parse(data) || [];
        const lista = Array.isArray(listaBruta) ? listaBruta : [];
        let precisaAtualizar = false;
        const normalizada = lista.map(produto => {
            let atualizado = { ...produto };
            if (!atualizado.id) {
                precisaAtualizar = true;
                atualizado = { ...atualizado, id: gerarIdLocal() };
            }
            if (!atualizado.owner_id) {
                precisaAtualizar = true;
                atualizado = { ...atualizado, owner_id: localSellerId };
            }
            return atualizado;
        });
        if (precisaAtualizar) {
            salvarProdutosVendedor(normalizada);
        }
        return normalizada;
    } catch {
        return [];
    }
}

function salvarProdutosVendedor(lista) {
    try {
        localStorage.setItem(sellerStorageKey, JSON.stringify(lista));
    } catch {
    }
}

function gerarIdLocal() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `local_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function obterItensCarrinho() {
    try {
        const raw = localStorage.getItem(cartSelectionKey);
        const lista = raw ? JSON.parse(raw) : [];
        return Array.isArray(lista) ? lista : [];
    } catch {
        return [];
    }
}

function salvarItensCarrinho(lista) {
    try {
        localStorage.setItem(cartSelectionKey, JSON.stringify(lista));
    } catch {
    }
}

function carregarPerfilLocal(usuarioId) {
    if (!usuarioId) return null;
    try {
        const raw = localStorage.getItem(`nimble_profile_${usuarioId}`);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function salvarPerfilLocal(usuarioId, perfil) {
    if (!usuarioId || !perfil) return;
    try {
        const existente = carregarPerfilLocal(usuarioId) || {};
        const atualizado = { ...existente, ...perfil };
        localStorage.setItem(`nimble_profile_${usuarioId}`, JSON.stringify(atualizado));
    } catch {
    }
}

function calcularResumoPedido(itens) {
    const subtotal = itens.reduce((total, item) => total + Number(item.preco || 0) * (item.quantidade || 1), 0);
    const frete = itens.length ? 9.9 : 0;
    const total = subtotal + frete;
    return { subtotal, frete, total };
}

function adicionarProdutoAoCarrinho(produto, categoriaContexto) {
    if (!produto) return;
    const itens = obterItensCarrinho();
    const payload = {
        id: produto.id || gerarIdLocal(),
        nome: produto.nome,
        descricao: produto.descricao,
        categoria: produto.categoria,
        preco: produto.preco,
        imagem: produto.imagem || null,
        owner_id: produto.owner_id || null,
        origem: produto.owner_id ? 'supabase' : 'local',
        quantidade: 1
    };

    const existenteIndex = itens.findIndex(item => item.id === payload.id && item.owner_id === payload.owner_id);
    if (existenteIndex >= 0) {
        itens[existenteIndex].quantidade += 1;
    } else {
        itens.push(payload);
    }

    salvarItensCarrinho(itens);

    const destino = categoriaContexto ? `carrinho.html?categoria=${categoriaContexto}` : 'carrinho.html';
    window.location.href = destino;
}

async function inicializarCarrinho() {
    const produtoContainer = document.getElementById('cart-product');
    const resumoContainer = document.getElementById('cart-summary');
    const feedback = document.getElementById('cart-feedback');
    const confirmarButton = document.getElementById('cart-confirm');
    const voltarButton = document.getElementById('cart-back');
    const addressInfo = document.getElementById('cart-address-info');
    const paymentForm = document.getElementById('payment-form');
    const paymentFeedback = document.getElementById('payment-feedback');
    const cashChangeOption = document.getElementById('cash-change-option');
    const cashChangeWrapper = document.getElementById('cash-change-wrapper');
    const pixStaticKey = document.getElementById('pix-static-key');
    const deliveryAreaRadios = document.querySelectorAll('input[name="delivery-area"]');
    const deliveryAreaFeedback = document.getElementById('delivery-area-feedback');
    const pixGenerateButton = document.getElementById('pix-generate');
    const pixQRCodeContainer = document.getElementById('pix-qrcode-container');
    const pixQRCodeImage = document.getElementById('pix-qrcode-image');
    const pixCopyCode = document.getElementById('pix-copy-code');
    const pixCopyButton = document.getElementById('pix-copy-btn');
    const pixFeedbackBox = document.getElementById('pix-feedback');

    if (!produtoContainer) return;

    const supabase = obterSupabaseClient();
    const supabaseDisponivel = Boolean(supabase);
    let currentUser = null;
    let pixSession = null;
    let pixGenerating = false;
    let deliveryAreaAnswer = null;

    if (supabaseDisponivel) {
        try {
            const { data } = await supabase.auth.getSession();
            currentUser = data.session?.user ?? null;
        } catch (err) {
            console.warn('Não foi possível identificar o usuário atual.', err);
        }
        supabase.auth.onAuthStateChange((_event, session) => {
            currentUser = session?.user ?? null;
        });
    }

    if (!inicializarCarrinho.__addressWatcher) {
        window.addEventListener('storage', event => {
            if (event.key === clientAddressKey) {
                const info = document.getElementById('cart-address-info');
                if (!info) return;
                const endereco = carregarEnderecoCliente();
                info.textContent = endereco && endereco.logradouro
                    ? formatarEnderecoCurto(endereco)
                    : 'Cadastre seu endereço na área "Minha Conta" para continuar.';
            }
        });
        inicializarCarrinho.__addressWatcher = true;
    }

    const itensCarrinho = obterItensCarrinho();
    const params = new URLSearchParams(window.location.search);
    const categoriaContexto = params.get('categoria');
    atualizarResumoEndereco(carregarEnderecoCliente());
    inicializarPagamento();
    resetarPixSession();
    deliveryAreaAnswer = null;

    if (pixGenerateButton) {
        pixGenerateButton.addEventListener('click', gerarQRCodePix);
    }

    if (pixCopyButton && pixCopyCode) {
        pixCopyButton.addEventListener('click', () => {
            pixCopyCode.select();
            document.execCommand('copy');
            if (pixFeedbackBox) {
                pixFeedbackBox.textContent = 'Código PIX copiado.';
                pixFeedbackBox.style.color = '#1c8c5d';
            }
        });
    }

    if (deliveryAreaRadios.length) {
        deliveryAreaRadios.forEach(radio => {
            radio.checked = false;
            radio.addEventListener('change', () => {
                deliveryAreaAnswer = radio.value;
                if (deliveryAreaFeedback) {
                    deliveryAreaFeedback.textContent = deliveryAreaAnswer === 'yes'
                        ? 'Ótimo! Verificaremos o endereço informado na próxima etapa.'
                        : 'Infelizmente só atendemos Balneário Piçarras, Penha e Barra Velha.';
                    deliveryAreaFeedback.style.color = deliveryAreaAnswer === 'yes' ? '#1c8c5d' : '#e23a44';
                }
            });
        });
        if (deliveryAreaFeedback) deliveryAreaFeedback.textContent = '';
    }

    if (pixGenerateButton) {
        pixGenerateButton.addEventListener('click', gerarQRCodePix);
    }

    if (pixCopyButton && pixCopyCode) {
        pixCopyButton.addEventListener('click', () => {
            pixCopyCode.select();
            document.execCommand('copy');
            if (pixFeedbackBox) {
                pixFeedbackBox.textContent = 'Código PIX copiado.';
                pixFeedbackBox.style.color = '#1c8c5d';
            }
        });
    }

    if (!itensCarrinho.length) {
        produtoContainer.innerHTML = '<p class="cart-empty">Você ainda não selecionou nenhum produto.</p>';
        if (resumoContainer) resumoContainer.innerHTML = '';
        if (confirmarButton) confirmarButton.disabled = true;
        if (paymentForm) paymentForm.reset();
        return;
    }

    produtoContainer.innerHTML = itensCarrinho.map((item, index) => `
        <article class="cart-detail-item">
            <img src="${item.imagem || 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80'}" alt="${item.nome}">
            <div class="cart-detail-info">
                <p class="badge">${formatarCategoria(item.categoria)}</p>
                <h2>${item.nome}</h2>
                <p>${item.descricao || 'Produto selecionado para seu pedido.'}</p>
                <div class="cart-detail-row">
                    <span class="cart-price">R$ ${Number(item.preco).toFixed(2)}</span>
                    <div class="cart-qty-controls">
                        <button type="button" data-acao="diminuir" data-index="${index}">-</button>
                        <span>${item.quantidade}</span>
                        <button type="button" data-acao="aumentar" data-index="${index}">+</button>
                    </div>
                </div>
                <button type="button" class="link-danger" data-acao="remover" data-index="${index}">Remover</button>
            </div>
        </article>
    `).join('');

    produtoContainer.querySelectorAll('button[data-acao]').forEach(button => {
        button.addEventListener('click', () => {
            const acao = button.dataset.acao;
            const index = Number(button.dataset.index);
            if (Number.isNaN(index)) return;
            if (acao === 'aumentar') atualizarQuantidadeCarrinho(index, 1);
            if (acao === 'diminuir') atualizarQuantidadeCarrinho(index, -1);
            if (acao === 'remover') removerItemCarrinho(index);
        });
    });

    if (resumoContainer) {
        const totais = calcularResumoPedido(itensCarrinho);
        resumoContainer.innerHTML = `
            <div class="cart-resume-line">
                <span>Subtotal</span>
                <strong>R$ ${totais.subtotal.toFixed(2)}</strong>
            </div>
            <div class="cart-resume-line">
                <span>Entrega estimada</span>
                <strong>R$ ${totais.frete.toFixed(2)}</strong>
            </div>
            <div class="cart-resume-line cart-total">
                <span>Total</span>
                <strong>R$ ${totais.total.toFixed(2)}</strong>
            </div>
        `;
    }

    if (confirmarButton) {
        confirmarButton.disabled = false;
        confirmarButton.addEventListener('click', async () => {
            if (feedback) feedback.textContent = '';
            if (paymentFeedback) paymentFeedback.textContent = '';

            const itensConfirmados = obterItensCarrinho();
            if (!itensConfirmados.length) {
                if (feedback) {
                    feedback.textContent = 'Carrinho vazio. Adicione itens antes de finalizar.';
                    feedback.style.color = '#e23a44';
                }
                return;
            }

            if (!deliveryAreaAnswer) {
                if (deliveryAreaFeedback) {
                    deliveryAreaFeedback.textContent = 'Confirme se você mora em Balneário Piçarras, Penha ou Barra Velha.';
                    deliveryAreaFeedback.style.color = '#e23a44';
                }
                return;
            }

            if (deliveryAreaAnswer !== 'yes') {
                if (deliveryAreaFeedback) {
                    deliveryAreaFeedback.textContent = 'No momento só entregamos nas cidades atendidas. :(';
                    deliveryAreaFeedback.style.color = '#e23a44';
                }
                return;
            }

            const enderecoAtual = carregarEnderecoCliente();
            if (!enderecoAtual || !enderecoAtual.logradouro || !enderecoAtual.cidade) {
                if (feedback) {
                    feedback.textContent = 'Cadastre seu endereço em Minha Conta antes de finalizar o pedido.';
                    feedback.style.color = '#e23a44';
                }
                return;
            }

            if (!cidadeAtendida(enderecoAtual.cidade)) {
                if (feedback) {
                    feedback.textContent = 'Só realizamos entregas em Balneário Piçarras, Penha e Barra Velha.';
                    feedback.style.color = '#e23a44';
                }
                return;
            }

            const pagamento = coletarDadosPagamento();
            if (!pagamento.valido) {
                const alvo = paymentFeedback || feedback;
                if (alvo) {
                    alvo.textContent = pagamento.mensagem || 'Verifique os dados de pagamento.';
                    alvo.style.color = '#e23a44';
                }
                return;
            }

            const totais = calcularResumoPedido(itensConfirmados);

            let validacaoGateway = null;
            const gatewayPayload = pagamento.gatewayPayload;
            delete pagamento.gatewayPayload;
            if (gatewayPayload) {
                validacaoGateway = await validarPagamentoRemoto(gatewayPayload, totais.total);
                if (!validacaoGateway.valido) {
                    const alvo = paymentFeedback || feedback;
                    if (alvo) {
                        alvo.textContent = validacaoGateway.mensagem || 'Não conseguimos autorizar o pagamento.';
                        alvo.style.color = '#e23a44';
                    }
                    return;
                }
            }

            const statusPagamento = validacaoGateway?.status || pagamento.detalhes.status;
            const pedido = {
                id: gerarIdLocal(),
                itens: itensConfirmados,
                subtotal: totais.subtotal,
                frete: totais.frete,
                total: totais.total,
                endereco: enderecoAtual,
                pagamento: {
                    ...pagamento.detalhes,
                    status: statusPagamento,
                    autorizacao: validacaoGateway?.autorizacao || null,
                    gateway: validacaoGateway?.detalhes || null
                },
                status: statusPagamento,
                cliente_id: currentUser?.id || 'cliente_local',
                criado_em: new Date().toISOString()
            };

            try {
                toggleConfirmLoading(true);
                const origemRegistro = await registrarPagamentoPedido(pedido);
                registrarVendas(itensConfirmados, enderecoAtual, pedido.status);
                await iniciarConversasPosPedido(pedido, {
                    currentUser,
                    supabaseDisponivel
                });
                document.dispatchEvent(new CustomEvent('nimble:pedido-registrado', { detail: pedido }));
                const statusLegivel = formatarStatusPedido(pedido.status);
                if (feedback) {
                    feedback.textContent = `Pedido registrado (${origemRegistro === 'remoto' ? 'sincronizado' : 'offline'}). Status: ${statusLegivel}.`;
                    feedback.style.color = '#1c8c5d';
                }
                if (paymentForm) paymentForm.reset();
                if (cashChangeWrapper) cashChangeWrapper.classList.add('hidden');
                resetarPixSession();
                salvarItensCarrinho([]);
                inicializarCarrinho();
            } catch (err) {
                console.error('Erro ao processar pagamento', err);
                const alvo = paymentFeedback || feedback;
                if (alvo) {
                    alvo.textContent = 'Não foi possível concluir o pagamento agora. Tente novamente.';
                    alvo.style.color = '#e23a44';
                }
            } finally {
                toggleConfirmLoading(false);
            }
        });
    }

    if (voltarButton) {
        voltarButton.addEventListener('click', () => {
            const destino = categoriaContexto ? `perfil.html?categoria=${categoriaContexto}` : 'perfil.html';
            window.location.href = destino;
        });
    }

    function atualizarResumoEndereco(endereco) {
        if (!addressInfo) return;
        if (endereco && endereco.logradouro) {
        const cidadeOk = cidadeAtendida(endereco.cidade);
        addressInfo.textContent = `${formatarEnderecoCurto(endereco)}${cidadeOk ? '' : ' • Fora da área de entrega'}`;
        if (!cidadeOk && deliveryAreaFeedback) {
            deliveryAreaFeedback.textContent = 'Endereço fora da área atendida (Balneário Piçarras, Penha e Barra Velha).';
            deliveryAreaFeedback.style.color = '#e23a44';
        }
            return;
        }
        addressInfo.textContent = 'Cadastre seu endereço na área "Minha Conta" para continuar.';
    }

    function inicializarPagamento() {
        if (!paymentForm) return;
        const metodoInicial = obterMetodoPagamentoAtual();
        alternarMetodoPagamento(metodoInicial);
        paymentForm.querySelectorAll('input[name="payment-method"]').forEach(input => {
            input.addEventListener('change', () => alternarMetodoPagamento(input.value));
        });
        if (cashChangeOption && cashChangeWrapper) {
            cashChangeOption.addEventListener('change', () => {
                cashChangeWrapper.classList.toggle('hidden', cashChangeOption.value !== 'troco');
            });
            cashChangeWrapper.classList.toggle('hidden', cashChangeOption.value !== 'troco');
        }
    }

    function alternarMetodoPagamento(metodo) {
        if (!paymentForm) return;
        paymentForm.querySelectorAll('.payment-fields').forEach(section => {
            const pertinente = section.dataset.method === metodo;
            section.classList.toggle('hidden', !pertinente);
        });

        if (metodo !== 'pix' && pixFeedbackBox) {
            pixFeedbackBox.textContent = '';
        }
    }

    function obterMetodoPagamentoAtual() {
        if (!paymentForm) return 'card';
        const selecionado = paymentForm.querySelector('input[name="payment-method"]:checked');
        return selecionado ? selecionado.value : 'card';
    }

    function coletarDadosPagamento() {
        if (!paymentForm) {
            return {
                valido: true,
                detalhes: {
                    metodo: 'default',
                    status: 'pago',
                    descricao: 'Pagamento padrão'
                },
                gatewayPayload: null
            };
        }

        const metodo = obterMetodoPagamentoAtual();

        if (metodo === 'card') {
            const numeroInput = document.getElementById('card-number');
            const titularInput = document.getElementById('card-holder');
            const validadeInput = document.getElementById('card-expiration');
            const cvvInput = document.getElementById('card-cvv');

            const numero = (numeroInput?.value || '').replace(/\s+/g, '');
            const titular = (titularInput?.value || '').trim();
            const validade = (validadeInput?.value || '').trim();
            const cvv = (cvvInput?.value || '').trim();

            if (!/^\d{13,19}$/.test(numero)) {
                return { valido: false, mensagem: 'Informe um número de cartão válido.' };
            }
            if (!titular) {
                return { valido: false, mensagem: 'Informe o nome impresso no cartão.' };
            }
            if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(validade)) {
                return { valido: false, mensagem: 'Informe a validade no formato MM/AA.' };
            }
            if (!/^\d{3,4}$/.test(cvv)) {
                return { valido: false, mensagem: 'CVV inválido.' };
            }

            const ultimosDigitos = numero.slice(-4);
            return {
                valido: true,
                detalhes: {
                    metodo: 'card',
                    status: 'pago',
                    descricao: `Cartão final ${ultimosDigitos}`,
                    detalhes: {
                        titular: titular.toUpperCase(),
                        validade,
                        final_cartao: ultimosDigitos
                    }
                },
                gatewayPayload: {
                    endpoint: '/api/pagamentos/cartao',
                    payload: {
                        cardNumber: numero,
                        holderName: titular,
                        expiration: validade,
                        cvv,
                        installments: 1
                    }
                }
            };
        }

        if (metodo === 'pix') {
            if (!pixSession || !pixSession.transactionId) {
                return { valido: false, mensagem: 'Gere o QR Code PIX antes de confirmar.' };
            }
            return {
                valido: true,
                detalhes: {
                    metodo: 'pix',
                    status: pixSession.status || 'aguardando_pagamento',
                    descricao: 'PIX via QR Code',
                    detalhes: {
                        chave: pixStaticKey?.textContent || 'nimble-delivery@pagamentos.com',
                        transacao: pixSession.transactionId
                    }
                },
                gatewayPayload: null
            };
        }

        if (metodo === 'cash') {
            const opcao = cashChangeOption ? cashChangeOption.value : 'nao';
            const trocoValor = Number(document.getElementById('cash-change')?.value || 0);
            if (opcao === 'troco' && trocoValor <= 0) {
                return { valido: false, mensagem: 'Informe o valor para o troco.' };
            }

            return {
                valido: true,
                detalhes: {
                    metodo: 'cash',
                    status: 'aguardando_pagamento',
                    descricao: opcao === 'troco'
                        ? `Dinheiro com troco para R$ ${trocoValor.toFixed(2)}`
                        : 'Dinheiro na entrega',
                    detalhes: {
                        precisa_troco: opcao === 'troco',
                        troco_para: opcao === 'troco' ? trocoValor : null
                    }
                },
                gatewayPayload: null
            };
        }

        return { valido: false, mensagem: 'Selecione um método de pagamento.' };
    }

    async function gerarQRCodePix() {
        if (pixGenerating) return;
        if (pixFeedbackBox) {
            pixFeedbackBox.textContent = '';
        }
        const itens = obterItensCarrinho();
        if (!itens.length) {
            if (pixFeedbackBox) {
                pixFeedbackBox.textContent = 'Adicione itens ao carrinho antes de gerar o QR Code.';
                pixFeedbackBox.style.color = '#e23a44';
            }
            return;
        }

        const totais = calcularResumoPedido(itens);
        pixGenerating = true;
        if (pixGenerateButton) {
            pixGenerateButton.disabled = true;
            pixGenerateButton.textContent = 'Gerando QR Code...';
        }

        try {
            const chave = pixStaticKey?.textContent?.trim() || '13643389981';
            const payload = gerarPayloadPixEstatica(chave, totais.total, currentUser?.user_metadata?.nome);
            pixSession = {
                transactionId: gerarIdLocal(),
                copyAndPaste: payload,
                status: 'aguardando_pagamento'
            };
            atualizarUIQRCode(pixSession);
            if (pixFeedbackBox) {
                pixFeedbackBox.textContent = 'QR Code gerado. Pague pelo app do banco e depois confirme o pedido.';
                pixFeedbackBox.style.color = '#1c8c5d';
            }
        } catch (err) {
            console.warn('Erro ao gerar QR Code PIX', err);
            if (pixFeedbackBox) {
                pixFeedbackBox.textContent = err.message || 'Não conseguimos gerar o QR Code agora.';
                pixFeedbackBox.style.color = '#e23a44';
            }
        } finally {
            pixGenerating = false;
            if (pixGenerateButton) {
                pixGenerateButton.disabled = false;
                pixGenerateButton.textContent = pixSession ? 'Gerar novo QR Code' : 'Gerar QR Code PIX';
            }
        }
    }

    function atualizarUIQRCode(session) {
        if (!pixQRCodeContainer || !pixQRCodeImage || !pixCopyCode) return;
        pixQRCodeContainer.classList.remove('hidden');
        pixCopyCode.value = session.copyAndPaste || '';
        const qrData = encodeURIComponent(session.copyAndPaste || '');
        pixQRCodeImage.src = qrData ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}` : '';
    }

    function resetarPixSession() {
        pixSession = null;
        if (pixQRCodeContainer) pixQRCodeContainer.classList.add('hidden');
        if (pixCopyCode) pixCopyCode.value = '';
        if (pixQRCodeImage) pixQRCodeImage.src = '';
        if (pixFeedbackBox) pixFeedbackBox.textContent = '';
        if (pixGenerateButton) {
            pixGenerateButton.disabled = false;
            pixGenerateButton.textContent = 'Gerar QR Code PIX';
        }
    }

    function toggleConfirmLoading(pendente) {
        if (!confirmarButton) return;
        confirmarButton.disabled = pendente;
        confirmarButton.textContent = pendente ? 'Processando pagamento...' : 'Confirmar pedido';
    }
}

function atualizarQuantidadeCarrinho(index, delta) {
    const itens = obterItensCarrinho();
    if (!itens[index]) return;
    itens[index].quantidade = Math.max(1, (itens[index].quantidade || 1) + delta);
    salvarItensCarrinho(itens);
    inicializarCarrinho();
}

function removerItemCarrinho(index) {
    const itens = obterItensCarrinho();
    if (!itens[index]) return;
    itens.splice(index, 1);
    salvarItensCarrinho(itens);
    inicializarCarrinho();
}

function carregarHistoricoVendas() {
    try {
        const raw = localStorage.getItem(sellerSalesKey);
        const lista = raw ? JSON.parse(raw) : [];
        return Array.isArray(lista) ? lista : [];
    } catch {
        return [];
    }
}

function salvarHistoricoVendas(lista) {
    try {
        localStorage.setItem(sellerSalesKey, JSON.stringify(lista));
    } catch {
    }
}

function registrarVendas(itens, endereco, status = 'processando') {
    if (!Array.isArray(itens) || !itens.length) return;
    if (!endereco || !endereco.logradouro) return;
    const destino = { ...endereco };
    const novasVendas = itens
        .filter(item => item?.owner_id)
        .map(item => ({
            id: gerarIdLocal(),
            produto_id: item.id || null,
            nome: item.nome || 'Produto',
            categoria: item.categoria || 'sem-categoria',
            quantidade: item.quantidade || 1,
            total: Number(item.preco || 0) * (item.quantidade || 1),
            owner_id: item.owner_id,
            origem: item.origem || 'local',
            endereco: { ...destino },
            status,
            registrado_em: new Date().toISOString()
        }));

    if (!novasVendas.length) return;

    const historicoAtual = carregarHistoricoVendas();
    salvarHistoricoVendas([...novasVendas, ...historicoAtual]);
}

async function validarPagamentoRemoto(gatewayPayload, valorTotal) {
    if (!gatewayPayload) return { valido: true };
    const baseUrl = pagamentosApiConfig.baseUrl;
    const url = `${baseUrl}${gatewayPayload.endpoint}`;
    const body = {
        amount: Number(valorTotal || 0),
        currency: 'BRL',
        ...gatewayPayload.payload
    };

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const data = await resposta.json().catch(() => ({}));

        if (!resposta.ok || data.status === 'recusado') {
            const mensagem = data?.message || 'Pagamento não autorizado.';
            return { valido: false, mensagem };
        }

        return {
            valido: true,
            status: data.status || 'pago',
            autorizacao: data.authorizationCode || data.pixCode || null,
            detalhes: data
        };
    } catch (err) {
        console.warn('Falha ao validar pagamento na API.', err);
        return {
            valido: false,
            mensagem: 'API de pagamentos indisponível. Inicie o servidor backend e tente novamente.'
        };
    }
}

function carregarPedidos() {
    try {
        const raw = localStorage.getItem(ordersStorageKey);
        const lista = raw ? JSON.parse(raw) : [];
        return Array.isArray(lista) ? lista : [];
    } catch {
        return [];
    }
}

function salvarPedidos(lista) {
    try {
        localStorage.setItem(ordersStorageKey, JSON.stringify(lista));
    } catch {
    }
}

function registrarPedidoLocal(pedido) {
    const pedidos = carregarPedidos();
    salvarPedidos([pedido, ...pedidos]);
}

function atualizarPedidoLocal(pedidoAtualizado) {
    const pedidos = carregarPedidos();
    const existe = pedidos.some(item => item.id === pedidoAtualizado.id);
    const atualizados = existe
        ? pedidos.map(item => item.id === pedidoAtualizado.id ? { ...item, ...pedidoAtualizado } : item)
        : [pedidoAtualizado, ...pedidos];
    salvarPedidos(atualizados);
}

function removerPedidoLocal(pedidoId) {
    if (!pedidoId) return;
    const pedidos = carregarPedidos().filter(item => item.id !== pedidoId);
    salvarPedidos(pedidos);
}

async function registrarPedidoSupabase(pedido) {
    const client = obterSupabaseClient();
    if (!client) throw new Error('Supabase indisponível');
    const payload = {
        id: pedido.id,
        cliente_id: pedido.cliente_id || null,
        subtotal: pedido.subtotal,
        frete: pedido.frete,
        total: pedido.total,
        status: pedido.status,
        pagamento_metodo: pedido.pagamento.metodo,
        pagamento_status: pedido.pagamento.status,
        pagamento_descricao: pedido.pagamento.descricao,
        pagamento_detalhes: pedido.pagamento,
        endereco: pedido.endereco,
        itens: pedido.itens,
        criado_em: pedido.criado_em
    };

    const { data, error } = await client
        .from('pedidos')
        .insert(payload)
        .select()
        .single();

    if (error) throw error;
    return data;
}

async function registrarPagamentoPedido(pedido) {
    const client = obterSupabaseClient();
    if (client) {
        try {
            await registrarPedidoSupabase(pedido);
            registrarPedidoLocal(pedido);
            return 'remoto';
        } catch (err) {
            console.warn('Não foi possível registrar o pedido no Supabase.', err);
        }
    }
    registrarPedidoLocal(pedido);
    return 'offline';
}

async function atualizarPedidoSupabase(pedidoAtualizado) {
    const client = obterSupabaseClient();
    if (!client) throw new Error('Supabase indisponível');
    const payload = {};
    if (typeof pedidoAtualizado.status !== 'undefined') {
        payload.status = pedidoAtualizado.status;
    }
    if (pedidoAtualizado.endereco) {
        payload.endereco = pedidoAtualizado.endereco;
    }
    if (!Object.keys(payload).length) return pedidoAtualizado;
    const { error } = await client
        .from('pedidos')
        .update(payload)
        .eq('id', pedidoAtualizado.id);
    if (error) throw error;
    return pedidoAtualizado;
}

async function excluirPedidoSupabase(pedidoId) {
    const client = obterSupabaseClient();
    if (!client) throw new Error('Supabase indisponível');
    const { error } = await client
        .from('pedidos')
        .delete()
        .eq('id', pedidoId);
    if (error) throw error;
}

function carregarConversasLocal() {
    try {
        const raw = localStorage.getItem(conversasStorageKey);
        const lista = raw ? JSON.parse(raw) : [];
        return Array.isArray(lista) ? lista : [];
    } catch {
        return [];
    }
}

function salvarConversasLocal(lista) {
    try {
        localStorage.setItem(conversasStorageKey, JSON.stringify(lista));
    } catch {
    }
}

function carregarMensagensLocal(conversaId) {
    try {
        const raw = localStorage.getItem(`${mensagensStorageKey}:${conversaId}`);
        const lista = raw ? JSON.parse(raw) : [];
        return Array.isArray(lista) ? lista : [];
    } catch {
        return [];
    }
}

function salvarMensagensLocal(conversaId, mensagens) {
    try {
        localStorage.setItem(`${mensagensStorageKey}:${conversaId}`, JSON.stringify(mensagens));
    } catch {
    }
}

async function iniciarConversasPosPedido(pedido, contexto = {}) {
    if (!pedido?.itens?.length) return;
    const supabase = contexto.supabaseDisponivel ? obterSupabaseClient() : null;
    const clienteId = contexto.currentUser?.id || 'cliente_local';
    const agrupado = pedido.itens.reduce((mapa, item) => {
        const vendedorId = item.owner_id || localSellerId;
        if (!mapa.has(vendedorId)) mapa.set(vendedorId, []);
        mapa.get(vendedorId).push(item);
        return mapa;
    }, new Map());

    const agora = new Date().toISOString();
    for (const [vendedorId, itens] of agrupado.entries()) {
        const titulo = itens.length > 1
            ? `${itens[0].nome} + ${itens.length - 1}`
            : itens[0]?.nome || 'Pedido Nimble';
        const conversaPayload = {
            id: gerarIdLocal(),
            pedido_id: pedido.id,
            cliente_id: clienteId,
            vendedor_id: vendedorId,
            titulo,
            ultima_mensagem: 'Pedido criado, aguardando resposta do vendedor.',
            atualizado_em: agora,
            status: pedido.status
        };
        const mensagemInicial = {
            id: gerarIdLocal(),
            conversa_id: conversaPayload.id,
            autor_id: clienteId,
            autor_tipo: 'cliente',
            conteudo: `Olá! Acabei de realizar o pedido ${pedido.id.slice(0, 8)} e gostaria de alinhar os detalhes.`,
            enviado_em: agora
        };

        if (supabase) {
            try {
                await supabase.from('conversas').insert(conversaPayload);
                await supabase.from('mensagens').insert(mensagemInicial);
                continue;
            } catch (err) {
                console.warn('Não foi possível criar a conversa no Supabase.', err);
            }
        }

        const conversasLocais = carregarConversasLocal();
        salvarConversasLocal([conversaPayload, ...conversasLocais]);
        const mensagensLocais = carregarMensagensLocal(conversaPayload.id);
        salvarMensagensLocal(conversaPayload.id, [...mensagensLocais, mensagemInicial]);
    }
}

async function inicializarChat() {
    const listaConversas = document.getElementById('chat-conversations');
    const tituloConversa = document.getElementById('chat-title');
    const tagPedido = document.getElementById('chat-order-tag');
    const statusConversa = document.getElementById('chat-status');
    const mensagensContainer = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const mensagemInput = document.getElementById('chat-message');
    const chatFeedback = document.getElementById('chat-message-feedback');
    const chatEmptyState = document.getElementById('chat-empty');
    const chatLoading = document.getElementById('chat-loading');
    const chatApp = document.getElementById('chat-app');
    const chatGuard = document.getElementById('chat-guard');

    if (!listaConversas) return;

    const supabase = obterSupabaseClient();
    const supabaseDisponivel = Boolean(supabase);
    let currentUser = null;
    let conversas = [];
    let conversaAtiva = null;
    let canalMensagens = null;

    async function obterSessao() {
        if (!supabaseDisponivel) return;
        try {
            const { data } = await supabase.auth.getSession();
            currentUser = data.session?.user ?? null;
            atualizarVisibilidade();
        } catch (err) {
            console.warn('Não foi possível identificar o usuário atual.', err);
        }
        supabase.auth.onAuthStateChange((_event, session) => {
            currentUser = session?.user ?? null;
            atualizarVisibilidade();
            if (currentUser) carregarConversas();
        });
    }

    await obterSessao();
    if (currentUser) {
        carregarConversas();
    } else {
        atualizarVisibilidade();
    }

    async function carregarConversas() {
        if (chatLoading) chatLoading.classList.remove('hidden');
        conversas = supabaseDisponivel
            ? await carregarConversasSupabase()
            : carregarConversasLocal();
        if (chatLoading) chatLoading.classList.add('hidden');

        if (!conversas.length) {
            listaConversas.innerHTML = '';
            chatEmptyState?.classList.remove('hidden');
            mensagensContainer.innerHTML = '<p class="chat-placeholder">Selecione ou gere um pedido para começar uma conversa.</p>';
            return;
        }

        chatEmptyState?.classList.add('hidden');
        listaConversas.innerHTML = conversas.map(conversa => `
            <button type="button" data-id="${conversa.id}" class="chat-list-item ${conversaAtiva?.id === conversa.id ? 'active' : ''}">
                <div>
                    <strong>${conversa.titulo || 'Conversa'}</strong>
                    <small>Pedido ${conversa.pedido_id ? conversa.pedido_id.slice(0, 8) : '—'}</small>
                </div>
                <p>${conversa.ultima_mensagem || 'Sem mensagens ainda.'}</p>
            </button>
        `).join('');

        listaConversas.querySelectorAll('button[data-id]').forEach(button => {
            button.addEventListener('click', () => abrirConversa(button.dataset.id));
        });

        if (!conversaAtiva && conversas.length) {
            abrirConversa(conversas[0].id);
        }
    }

    async function carregarConversasSupabase() {
        if (!currentUser) {
            if (chatEmptyState) {
                chatEmptyState.textContent = 'Faça login para visualizar suas conversas.';
            }
            return carregarConversasLocal();
        }
        try {
            const { data, error } = await supabase
                .from('conversas')
                .select('id, pedido_id, cliente_id, vendedor_id, titulo, ultima_mensagem, atualizado_em, status')
                .or(`cliente_id.eq.${currentUser.id},vendedor_id.eq.${currentUser.id}`)
                .order('atualizado_em', { ascending: false });
            if (error) throw error;
            if (data?.length) salvarConversasLocal(data);
            return data || [];
        } catch (err) {
            console.warn('Não foi possível carregar conversas.', err);
            return carregarConversasLocal();
        }
    }

    async function abrirConversa(conversaId) {
        const conversa = conversas.find(item => item.id === conversaId);
        if (!conversa) return;
        conversaAtiva = conversa;
        listaConversas.querySelectorAll('.chat-list-item').forEach(item => {
            item.classList.toggle('active', item.dataset.id === conversaId);
        });
        tituloConversa.textContent = conversa.titulo || 'Conversa';
        tagPedido.textContent = conversa.pedido_id
            ? `Pedido ${conversa.pedido_id.slice(0, 8)}`
            : 'Pedido';
        statusConversa.textContent = formatarStatusPedido(conversa.status);
        mensagensContainer.innerHTML = '<p class="chat-placeholder">Carregando mensagens...</p>';

        const mensagens = supabaseDisponivel
            ? await carregarMensagensSupabase(conversaId)
            : carregarMensagensLocal(conversaId);

        salvarMensagensLocal(conversaId, mensagens);
        renderizarMensagens(mensagens);
        iniciarRealtime(conversaId);
    }

    async function carregarMensagensSupabase(conversaId) {
        try {
            const { data, error } = await supabase
                .from('mensagens')
                .select('id, conversa_id, autor_id, autor_tipo, conteudo, enviado_em')
                .eq('conversa_id', conversaId)
                .order('enviado_em', { ascending: true });
            if (error) throw error;
            return data || [];
        } catch (err) {
            console.warn('Não foi possível carregar as mensagens.', err);
            return carregarMensagensLocal(conversaId);
        }
    }

    function renderizarMensagens(lista) {
        if (!lista?.length) {
            mensagensContainer.innerHTML = '<p class="chat-placeholder">Envie a primeira mensagem para iniciar o contato.</p>';
            return;
        }
        mensagensContainer.innerHTML = lista.map(msg => {
            const ehAutor = currentUser && msg.autor_id === currentUser.id;
            const autorTipo = msg.autor_tipo || (ehAutor ? 'cliente' : 'vendedor');
            const autorNome = ehAutor
                ? 'Você'
                : autorTipo === 'vendedor'
                    ? 'Vendedor'
                    : 'Cliente';
            const horario = new Date(msg.enviado_em).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            return `
                <div class="chat-message ${ehAutor ? 'self' : ''}">
                    <div class="chat-bubble" data-role="${autorTipo}">
                        <span class="chat-author">${autorNome}</span>
                        <p>${msg.conteudo}</p>
                        <small class="chat-time">${horario}</small>
                    </div>
                </div>
            `;
        }).join('');
        mensagensContainer.scrollTop = mensagensContainer.scrollHeight;
    }

    function iniciarRealtime(conversaId) {
        if (!supabaseDisponivel) return;
        if (canalMensagens) {
            supabase.removeChannel(canalMensagens);
            canalMensagens = null;
        }
        canalMensagens = supabase
            .channel(`chat-mensagens-${conversaId}`)
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'mensagens',
                filter: `conversa_id=eq.${conversaId}`
            }, payload => {
                if (payload.new) {
                    const atual = carregarMensagensLocal(conversaId);
                    salvarMensagensLocal(conversaId, [...atual, payload.new]);
                    if (conversaAtiva?.id === conversaId) {
                        renderizarMensagens([...atual, payload.new]);
                    }
                }
            })
            .subscribe();
    }

    if (chatForm) {
        chatForm.addEventListener('submit', async event => {
            event.preventDefault();
            chatFeedback.textContent = '';
            if (!conversaAtiva) {
                chatFeedback.textContent = 'Selecione uma conversa para enviar mensagens.';
                chatFeedback.style.color = '#e23a44';
                return;
            }

            const texto = mensagemInput.value.trim();
            if (!texto) return;
            mensagemInput.value = '';

            const payload = {
                id: gerarIdLocal(),
                conversa_id: conversaAtiva.id,
                autor_id: currentUser?.id || 'cliente_local',
                autor_tipo: currentUser?.id === conversaAtiva.vendedor_id ? 'vendedor' : 'cliente',
                conteudo: texto,
                enviado_em: new Date().toISOString()
            };

            const mensagensLocais = carregarMensagensLocal(conversaAtiva.id);
            const mensagensAtualizadas = [...mensagensLocais, payload];
            salvarMensagensLocal(conversaAtiva.id, mensagensAtualizadas);
            renderizarMensagens(mensagensAtualizadas);

            if (supabaseDisponivel) {
                try {
                    await supabase.from('mensagens').insert(payload);
                    await supabase
                        .from('conversas')
                        .update({
                            ultima_mensagem: texto,
                            atualizado_em: payload.enviado_em
                        })
                        .eq('id', conversaAtiva.id);
                    return;
                } catch (err) {
                    console.warn('Não foi possível enviar a mensagem.', err);
                }
            }

            const conversasLocal = carregarConversasLocal().map(item =>
                item.id === conversaAtiva.id
                    ? { ...item, ultima_mensagem: texto, atualizado_em: payload.enviado_em }
                    : item
            );
            salvarConversasLocal(conversasLocal);
            chatFeedback.textContent = 'Mensagem salva offline. Sincronize quando estiver online.';
            chatFeedback.style.color = '#f3c664';
        });
    }

    function atualizarVisibilidade() {
        const logado = Boolean(currentUser);
        if (chatApp) chatApp.classList.toggle('hidden', !logado);
        if (chatGuard) chatGuard.classList.toggle('hidden', logado);
        if (!logado && chatEmptyState) {
            chatEmptyState.textContent = 'Faça login para visualizar suas conversas.';
        }
    }
}