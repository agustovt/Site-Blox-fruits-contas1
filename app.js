// Função de Redirecionamento e Notificação ao Clicar em Comprar
function handlePurchase(productName) {
    // Exibe uma notificação para o usuário
    alert("Obrigado pela compra! Você será redirecionado para o nosso Discord.");
    
    // Redireciona o usuário para o Discord
    window.location.href = "https://discord.gg/k9jqz87T";
    
    // Aqui, podemos também fazer algum tipo de registro no Discord ou na sua plataforma.
    // Para isso, você pode usar um Bot do Discord para enviar a mensagem para um canal específico.
    // Exemplo: 
    // `!bot enviar mensagem sobre a compra de {productName}`
}