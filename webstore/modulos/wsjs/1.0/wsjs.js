﻿
var ApiWS = {}





ApiWS.Token = null;
ApiWS.FileReturn = null;
ApiWS.Json = null;
ApiWS.LV = null;





ApiWS.ApiStart = function () {

    try {

        var Token = $("#HdTokenLojaTemp").val();
        ApiWS.LV = $("#HD_LV_ID").val();

        //console.log("Token:" + Token);
        //console.log("LV:" + ApiWS.LV);

    }
    catch (e)
    {
        console.log(e.message);
    }

}




ApiWS.FuncAfter_ListaProdutosHome = null;
ApiWS.ListaProdutosHome_Tentativas = 0;
ApiWS.ListaProdutosHome = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaProdutosHome = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaProdutosHome;
    }

    try {

        ApiWS.ListaProdutosHome_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();

            retorno = '{"totalitens":36,"produtos":[{"codigo":"CIN1263","nome":"Gold Standard - Whey ","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":null,"precos":{"preco":59.90,"preco_promocao":53.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/caixa-de-som-portatil-hummer-h2"},"maisprodutos":null,"fotos":["https://cdn.awsli.com.br/300x300/677/677173/produto/27929115/9ee0bb6a76.jpg","https://cdn.awsli.com.br/300x300/677/677173/produto/27929115/9ee0bb6a76.jpg"],"integracoes":[]},{"codigo":"CIN9980","nome":"ISO+","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":89.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-ford-2010-f-150-stx-1-27"},"maisprodutos":null,"fotos":["https://cdn.awsli.com.br/300x300/677/677173/produto/27935766/5f3a3d7d69.jpg","https://cdn.awsli.com.br/300x300/677/677173/produto/27935766/5f3a3d7d69.jpg"],"integracoes":[]},{"codigo":"CIN3376","nome":"BCAA 3:1:1 - 3VS","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Wilson","url":"/fabricante/4924/9673/wilson","logotipo":null},"precos":{"preco":199.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/mochila-esportiva-pretoazul-wilson-wtix13352b"},"maisprodutos":null,"fotos":["https://cdn.awsli.com.br/300x300/677/677173/produto/27957486/791b741161.jpg"],"integracoes":[]},{"codigo":"CIN9898","nome":"PASTA DE AMENDOIM","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":109.90,"preco_promocao":99.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/carrinho-de-controle-remoto-hummer-2008-hx-concept-1-24"},"maisprodutos":null,"fotos":["https://cdn.awsli.com.br/300x300/677/677173/produto/27963428/51a8f61b82.jpg","https://cdn.awsli.com.br/300x300/677/677173/produto/27963428/51a8f61b82.jpg"],"integracoes":[]},{"codigo":"CIN4980","nome":"Mouse Sem Fio do Santos F.C.","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":48.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/mouse-sem-fio-do-santos-fc"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_555_mouse-sem-fio-do-santos-fc.jpg","https://images.webstore.net.br/files/4924/PEQ_913_mouse-sem-fio-do-santos-fc.jpg"],"integracoes":[]},{"codigo":"CIN8159","nome":"Jogo de Xicaras 200ml Flamengo","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":32.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/jogo-de-xicaras-200ml-flamengo"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_jogo-de-xicaras-200ml-flamengo.jpg","https://images.webstore.net.br/files/4924/PEQ_291_jogo-de-xicaras-200ml-flamengo.jpg"],"integracoes":[]},{"codigo":"CIN1209","nome":"Jogo de Xicaras 90ml Cruzeiro E.C.","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":32.90,"preco_promocao":29.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/jogo-de-xicaras-90ml-cruzeiro-ec"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_jogo-de-xicaras-90ml-cruzeiro-ec.jpg","https://images.webstore.net.br/files/4924/PEQ_jogo-de-xicaras-90ml-cruzeiro-ec1.jpg"],"integracoes":[]},{"codigo":"CIN7182","nome":"Garrafa Squeeze de Inox 750ml Fluminense","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":39.90,"preco_promocao":35.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/garrafa-squeeze-de-inox-750ml-fluminense"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_garrafa-squeeze-de-inox-750ml-fluminense.jpg","https://images.webstore.net.br/files/4924/PEQ_garrafa-squeeze-de-inox-750ml-fluminense1.jpg"],"integracoes":[]},{"codigo":"CIN2155","nome":"Miniatura BMW Z8 (1:24)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":89.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-bmw-z8-1-24-1050318"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_615_miniatura-bmw-z8-1-24.jpg","https://images.webstore.net.br/files/4924/PEQ_784_miniatura-bmw-z8-1-24.jpg"],"integracoes":[]},{"codigo":"CIN9981","nome":"Miniatura Ford 1999 F-350 Super Duty (1:27)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":89.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-ford-1999-f-350-super-duty-1-27"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-ford-1999-f-350-super-duty-1-27.jpg","https://images.webstore.net.br/files/4924/PEQ_553_miniatura-ford-1999-f-350-super-duty-1-27.jpg"],"integracoes":[]},{"codigo":"CIN1820","nome":"Miniatura Bicicleta Porsche Bike Fs Evolution 1:10","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Welly","url":"/fabricante/4924/10482/welly","logotipo":null},"precos":{"preco":57.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-bicicleta-porsche-bike-fs-evolution-1-10"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-bicicleta-porsche-bike-fs-evolution-1-10.jpg","https://images.webstore.net.br/files/4924/PEQ_miniatura-bicicleta-porsche-bike-fs-evolution-1-101.jpg"],"integracoes":[]},{"codigo":"CIN2127","nome":"Protetor De Coluna Raptor (G) - Mt021","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Multilaser","url":"/fabricante/4924/9669/multilaser","logotipo":null},"precos":{"preco":99.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/protetor-de-coluna-raptor-g-mt021"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_protetor-de-coluna-raptor-g-mt021.jpg","https://images.webstore.net.br/files/4924/PEQ_620_protetor-de-coluna-raptor-g-mt021.jpg"],"integracoes":[]},{"codigo":"CIN9901","nome":"Carrinho de Controle Remoto Off-Road Land Rover Defender (1:16)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":179.90,"preco_promocao":152.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/carrinho-de-controle-remoto-off-road-land-rover-defender-1-16"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_carrinho-de-controle-remoto-off-road-land-rover-defender-1-16.jpg","https://images.webstore.net.br/files/4924/PEQ_487_carrinho-de-controle-remoto-off-road-land-rover-defender-1-16.jpg"],"integracoes":[]},{"codigo":"CIN1840","nome":"Miniatura Moto KTM 1290 Super Duke R 1:12","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":79.90,"preco_promocao":67.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-moto-ktm-1290-super-duke-r-1-12"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-moto-ktm-1290-super-duke-r-1-12.jpg","https://images.webstore.net.br/files/4924/PEQ_585_miniatura-moto-ktm-1290-super-duke-r-1-12.jpg"],"integracoes":[]},{"codigo":"CIN3943","nome":"Miniatura Mercedes-Benz 2012 SL AMG 63 Convertible (1:24)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":null,"precos":{"preco":89.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-mercedes-benz-2012-sl-amg-63-convertible-1-24"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-mercedes-benz-2012-sl-amg-63-convertible-1-24.jpg","https://images.webstore.net.br/files/4924/PEQ_miniatura-mercedes-benz-2012-sl-amg-63-convertible-1-241.jpg"],"integracoes":[]},{"codigo":"CIN9925","nome":"Estojo Chuteira Sport Club Recife","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":36.90,"preco_promocao":32.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/estojo-chuteira-sport-club-recife"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_estojo-chuteira-sport-club-recife.JPG","https://images.webstore.net.br/files/4924/PEQ_933_estojo-chuteira-sport-club-recife.JPG"],"integracoes":[]},{"codigo":"CIN5342","nome":"Miniatura Moto MV Agusta Brutale 1090 RR (1:12)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":79.90,"preco_promocao":67.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-moto-mv-agusta-brutale-1090-rr-1-12"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-moto-mv-agusta-brutale-1090-rr-1-12.jpg","https://images.webstore.net.br/files/4924/PEQ_513_miniatura-moto-mv-agusta-brutale-1090-rr-1-12.jpg"],"integracoes":[]},{"codigo":"CIN2826","nome":"Miniatura VW Van Samba Harley Davidson (1:25)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":119.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-vw-van-samba-harley-davidson-1-25"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-vw-van-samba-harley-davidson-1-25.jpg","https://images.webstore.net.br/files/4924/PEQ_200_miniatura-vw-van-samba-harley-davidson-1-25.jpg"],"integracoes":[]},{"codigo":"CIN9914","nome":"Chaveiro, Caneta e Broche Sport Club Recife","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":32.90,"preco_promocao":29.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/chaveiro-caneta-e-broche-sport-club-recife"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_chaveiro-caneta-e-broche-sport-club-recife.jpg","https://images.webstore.net.br/files/4924/PEQ_438_chaveiro-caneta-e-broche-sport-club-recife.jpg"],"integracoes":[]},{"codigo":"CIN1304","nome":"Miniatura Mercedes Benz SLS AMG Roadster Exotics","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":105.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-mercedes-benz-sls-amg-roadster-exotics"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-mercedes-benz-sls-amg-roadster-exotics.jpg","https://images.webstore.net.br/files/4924/PEQ_618_miniatura-mercedes-benz-sls-amg-roadster-exotics.jpg"],"integracoes":[]},{"codigo":"CIN9977","nome":"Miniatura Ford  2004 F-150 Fx4 (1:31)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":89.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-ford-2004-f-150-fx4-1-31"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-ford-2004-f-150-fx4.jpg","https://images.webstore.net.br/files/4924/PEQ_457_miniatura-ford-2004-f-150-fx4.jpg"],"integracoes":[]},{"codigo":"CIN4285","nome":"Miniatura Range Rover Evoque com Luz e Som 1:24","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Califórnia Toys","url":"/fabricante/4924/10481/california-toys","logotipo":null},"precos":{"preco":112.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-range-rover-evoque-com-luz-e-som-1-24"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-range-rover-evoque-com-luz-e-som-1-24.jpg","https://images.webstore.net.br/files/4924/PEQ_miniatura-range-rover-evoque-com-luz-e-som-1-241.jpg"],"integracoes":[]},{"codigo":"CIN2924","nome":"Caixa de Som Portátil Hifi-Speaker M-599","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":null,"precos":{"preco":64.90,"preco_promocao":53.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/caixa-de-som-portatil-hifi-speaker-m-599"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_caixa-de-som-portatil-hifi-speaker-m-599-ferrari.JPG","https://images.webstore.net.br/files/4924/PEQ_321_caixa-de-som-portatil-hifi-speaker-m-599-ferrari.JPG"],"integracoes":[]},{"codigo":"CIN9982","nome":"Miniatura Ford Fusion 2006 (1:24)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":89.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-ford-fusion-2006-1-24"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-ford-fusion-2006-1-24.jpg","https://images.webstore.net.br/files/4924/PEQ_599_miniatura-ford-fusion-2006-1-24.jpg"],"integracoes":[]},{"codigo":"CIN6993","nome":"Jogo de Xicaras 90ml E.C. Bahia","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":32.90,"preco_promocao":29.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/jogo-de-xicaras-90ml-ec-bahia"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_jogo-de-xicaras-90ml-ec-bahia.jpg","https://images.webstore.net.br/files/4924/PEQ_jogo-de-xicaras-90ml-ec-bahia1.jpg"],"integracoes":[]},{"codigo":"CIN9893","nome":"Capacete com Led Integrado Vermelho Atrio - BI104","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Atrio","url":"/fabricante/4924/9671/atrio","logotipo":null},"precos":{"preco":149.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/capacete-com-led-integrado-vermelho-atrio-bi104"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_563_capacete-com-led-integrado-vermelho-atrio-bi104.jpg","https://images.webstore.net.br/files/4924/PEQ_691_capacete-com-led-integrado-vermelho-atrio-bi104.jpg"],"integracoes":[]},{"codigo":"CIN7315","nome":"Jogo de Xícaras 200ml Santos F.C.","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":32.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/jogo-de-xicaras-200ml-santos-fc"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_jogo-de-xicaras-200ml-santos-fc.jpg","https://images.webstore.net.br/files/4924/PEQ_846_jogo-de-xicaras-200ml-santos-fc.jpg"],"integracoes":[]},{"codigo":"CIN9941","nome":"Garrafa Squeeze de Inox 750ml Flamengo","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":39.90,"preco_promocao":35.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/garrafa-squeeze-de-inox-750ml-flamengo"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_garrafa-squeeze-de-inox-flamengo.jpg","https://images.webstore.net.br/files/4924/PEQ_761_garrafa-squeeze-de-inox-flamengo.jpg"],"integracoes":[]},{"codigo":"CIN9953","nome":"Jogo de Xícaras Santos F.C.","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":32.90,"preco_promocao":29.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/jogo-de-xicaras-santos-fc"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_jogo-de-xicaras-santos-fc.jpg","https://images.webstore.net.br/files/4924/PEQ_694_jogo-de-xicaras-santos-fc.jpg"],"integracoes":[]},{"codigo":"CIN9944","nome":"Garrafa Squeeze de Inox 750ml São Paulo F.C.","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":39.90,"preco_promocao":35.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/garrafa-squeeze-de-inox-750ml-sao-paulo-fc"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_garrafa-squeeze-de-inox-sao-paulo-fc.jpg","https://images.webstore.net.br/files/4924/PEQ_237_garrafa-squeeze-de-inox-sao-paulo-fc.jpg"],"integracoes":[]},{"codigo":"CIN9932","nome":"Garrafa com Alça e Sacola Clube Atlético Mineiro","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":35.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/garrafa-com-alca-e-sacola-clube-atletico-mineiro"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_garrafa-com-alca-e-sacola-clube-atletico-mineiro.jpg","https://images.webstore.net.br/files/4924/PEQ_137_garrafa-com-alca-e-sacola-clube-atletico-mineiro.jpg"],"integracoes":[]},{"codigo":"CIN9883","nome":"Caneca na Lata Cruzeiro E.C. ","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":35.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/caneca-na-lata-cruzeiro-ec"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_caneca-na-lata-cruzeiro-ec.jpg","https://images.webstore.net.br/files/4924/PEQ_255_caneca-na-lata-cruzeiro-ec.jpg"],"integracoes":[]},{"codigo":"CIN9987","nome":"Miniatura Moto Harley Davidson 2002 FXSTB Night Train (1:18)","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Maisto","url":"/fabricante/4924/9668/maisto","logotipo":null},"precos":{"preco":45.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/miniatura-moto-harley-davidson-2002-fxstb-night-train-1-18"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_miniatura-moto-harley-davidson-2002-fxstb-night-train-1-18.jpg"],"integracoes":[]},{"codigo":"CIN9918","nome":"Cooler para Notebook Hexa Cooler até 17 AC282","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Multilaser","url":"/fabricante/4924/9669/multilaser","logotipo":null},"precos":{"preco":131.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/cooler-para-notebook-hexa-cooler-ate-17-ac282"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_cooler-para-notebook-hexa-cooler-ate-17-ac282.jpg","https://images.webstore.net.br/files/4924/PEQ_334_cooler-para-notebook-hexa-cooler-ate-17-ac282.jpg"],"integracoes":[]},{"codigo":"CIN9887","nome":"Chaveiro e Canivete Suiço Corínthians ","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Mileno","url":"/fabricante/4924/9672/mileno","logotipo":null},"precos":{"preco":35.90,"preco_promocao":32.90,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/chaveiro-e-canivete-suico-corinthians"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_chaveiro-e-canivete-suico-corinthians.jpg"],"integracoes":[]},{"codigo":"CIN5364","nome":"Power Cooler Gamer Com Led Luminoso - AC267","modo":"1","disponivel":true,"lancamento":false,"subprodutos":false,"fretegratis":false,"datalimite":"\/Date(1529204400000)\/","fabricante":{"nome":"Multilaser","url":"/fabricante/4924/9669/multilaser","logotipo":null},"precos":{"preco":89.90,"preco_promocao":0.00,"desconto_avista":0,"max_parcelas":12,"valor_min_parcelas":5.00,"juros_inicia":4,"juros":2.99},"links":{"botao_comprar":null,"ver_produto":"/power-cooler-gamer-com-led-luminoso-ac267"},"maisprodutos":null,"fotos":["https://images.webstore.net.br/files/4924/PEQ_power-cooler-gamer-com-led-luminoso-ac267.jpg"],"integracoes":[]}],"infoadd":" / TEMPO SEARCH:0","paginacao":null,"tipo_exibicao":null,"ordem_atual":"","scripts":"","titulo_pagina":null,"migalha":null}';

            try {

                JSON.parse(retorno);

                ApiWS.Json = retorno;
                //console.log("Retorno ListaProdutosHome:" + retorno);
                //console.log("Endpoint:/api-loja/produtos/home");
                //console.log("Post:LOJA=" + ApiWS.LV + "&LvToken=" + Token);

                if (retorno.indexOf("erro") < 0) {
                    try {
                        ApiWS.setCookie(NomeCookie, retorno, 2400);
                    } catch (e) { }
                }

                eval(FuncaoAfter + "()");

            } catch (e) {

                console.log("Falha ListaProdutosHome " + e.message + " - " + retorno);
                if (ApiWS.ListaProdutosHome_Tentativas < 2) {
                    window.setTimeout("ApiWS.ListaProdutosHome()", 500);
                }

            }

    } catch (e) { console.log("Falha ao listar produtos da página inicial:" + e.message); }

}



ApiWS.FuncAfter_ListaProdutosUltimos = null;
ApiWS.ListaProdutosUltimos_Tentativas = 0;
ApiWS.ListaProdutosUltimos = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaProdutosUltimos = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaProdutosUltimos;
    }

    try {

        ApiWS.ListaProdutosUltimos_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();

        var Ultimos = getCookie("WS_LOJA_" + ApiWS.LV);

        if (Ultimos != "" && Ultimos != null && Ultimos != undefined) {

            $.ajax({
                type: "POST",
                url: "/api-loja/produtos/ultimos",
                data: "LOJA=" + ApiWS.LV + "&LvToken=" + Token + "&ultimos=" + Ultimos,
                beforeSend: function () { },
                error: function (e) { console.log(e.message); console.log("Falha ao listar produtos vistos recentemente"); },
                success: function (retorno) {

                    retorno = ApiWS.LimpaJson(retorno);

                    try {

                        JSON.parse(retorno);

                    } catch (e) {

                        console.log("Falha ListaProdutosUltimos " + e.message + " - " + retorno);
                        if (ApiWS.ListaProdutosUltimos_Tentativas < 2) {
                            window.setTimeout("ApiWS.ListaProdutosUltimos()", 500);
                        }

                    }

                    ApiWS.Json = retorno;
                    eval(FuncaoAfter + "()");

                }
            });

        }

    } catch (e) { console.log(e.message); console.log("Falha ao listar produtos vistos recentemente:" + e.message); }

}



ApiWS.FuncAfter_ListaProdutosRelacionados = null;
ApiWS.ListaProdutosRelacionados_Tentativas = 0;
ApiWS.ListaProdutosRelacionados = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaProdutosRelacionados = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaProdutosRelacionados;
    }
    
    try {

        ApiWS.ListaProdutosRelacionados_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();
        var Produto = $("#LV_HD_PROD_ID").val();

        var NomeCookie = "relacionados" + ApiWS.LV + Produto;
        while (NomeCookie.indexOf("|") >= 0 || NomeCookie.indexOf("_") >= 0) {
            NomeCookie = NomeCookie.replace("|", "").replace("_", "");
        }
        var Cookie = ApiWS.getCookie(NomeCookie)

        if (Cookie != "" && Cookie != null && Cookie != undefined) {

            ApiWS.Json = Cookie;
            eval(FuncaoAfter + "()");

        } else {

            $.ajax({
                type: "POST",
                url: "/api-loja/produtos/relacionados",
                data: "LOJA=" + ApiWS.LV + "&LvToken=" + Token + "&Produto=" + Produto,
                beforeSend: function () { },
                error: function (e) { console.log(e.message); console.log("Falha ao listar produtos vistos recentemente"); },
                success: function (retorno) {

                    retorno = ApiWS.LimpaJson(retorno);

                    try {

                        JSON.parse(retorno);

                        ApiWS.Json = retorno;

                        if (retorno.indexOf("erro") < 0) {
                            try {
                                ApiWS.setCookie(NomeCookie, retorno, 2400);
                            } catch (e) { }
                        }

                        eval(FuncaoAfter + "()");

                    } catch (e) {

                        console.log("Falha ListaProdutosRelacionados " + e.message + " - " + retorno);
                        if (ApiWS.ListaProdutosRelacionados_Tentativas < 2) {
                            window.setTimeout("ApiWS.ListaProdutosRelacionados()", 500);
                        }

                    }

                }
            });

        }

    } catch (e) { console.log(e.message); console.log("Falha ao listar produtos vistos recentemente:" + e.message); }

}



ApiWS.FuncAfter_ListaProdutosDestaque = null;
ApiWS.ListaProdutosDestaque_Tentativas = 0;
ApiWS.ListaProdutosDestaque = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaProdutosDestaque = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaProdutosDestaque;
    }

    try {

        ApiWS.ListaProdutosDestaque_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();

        retorno = '{"totalitens":0,"produtos":null,"infoadd":null,"paginacao":null,"tipo_exibicao":null,"ordem_atual":null,"scripts":null,"titulo_pagina":null,"migalha":null}';

        try {

            JSON.parse(retorno);

            ApiWS.Json = retorno;

            if (retorno.indexOf("erro") < 0) {
                try {
                    ApiWS.setCookie(NomeCookie, retorno, 2400);
                } catch (e) { }
            }

            eval(FuncaoAfter + "()");

        } catch (e) {

            console.log("Falha ListaProdutosDestaque " + e.message + " - " + retorno);
            if (ApiWS.ListaProdutosDestaque_Tentativas < 2) {
                window.setTimeout("ApiWS.ListaProdutosDestaque()", 500);
            }

        }


    } catch (e) { console.log(e.message); console.log("Falha ao listar produtos em destaque:" + e.message); }

}




ApiWS.FuncAfter_ListaProdutosGrupos = null;
ApiWS.ListaProdutosGrupos_Tentativas = 0;
ApiWS.ListaProdutosGrupos = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaProdutosGrupos = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaProdutosGrupos;
    }

    try {

        ApiWS.ListaProdutosGrupos_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();

        retorno = '{"grupos":[]}';

        try {

            JSON.parse(retorno);

            ApiWS.Json = retorno;
            eval(FuncaoAfter + "()");

        } catch (e) {

            console.log("Falha ListaProdutosGrupos " + e.message + " - " + retorno);
            if (ApiWS.ListaProdutosGrupos_Tentativas < 2) {
                window.setTimeout("ApiWS.ListaProdutosGrupos()", 500);
            }

        }



    } catch (e) { console.log(e.message); console.log("Falha ao listar grupos da página inicial:" + e.message); }

}




ApiWS.FuncAfter_ProdutoDados = null;
ApiWS.ProdutoDados_Tentativas = 0;
ApiWS.ProdutoDados = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ProdutoDados = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ProdutoDados;
    }

    try {

        ApiWS.ProdutoDados_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();
        var Produto = $("#LV_HD_PROD_ID").val();

        $.ajax({
            type: "POST",
            url: "/api-loja/produtos/dadosproduto",
            data: "LOJA=" + ApiWS.LV + "&LvToken=" + Token + "&Produto=" + Produto,
            beforeSend: function () { },
            error: function (e) { console.log(e.message); console.log("Falha ao listar grupos da página inicial"); },
            success: function (retorno) {

                ApiWS.Json = "";
                retorno = ApiWS.LimpaJson(retorno);

                try {

                    JSON.parse(retorno);

                    ApiWS.Json = retorno;
                    eval(FuncaoAfter + "()");


                } catch (e) {

                    console.log("Falha ProdutoDados " + e.message + " - " + retorno);
                    if (ApiWS.ProdutoDados_Tentativas < 2) {
                        window.setTimeout("ApiWS.ProdutoDados()", 500);
                    }

                }

            }
        });

    } catch (e) { console.log(e.message); console.log("Falha ao listar grupos da página inicial:" + e.message); }

}




ApiWS.FuncAfter_ListaCategorias = null;
ApiWS.ListaCategorias_Tentativas = 0;
ApiWS.ListaCategorias = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaCategorias = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaCategorias;
    }

    try {

        ApiWS.ListaCategorias_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();
        var VarsCategorias = $("#VarsCategorias").val();

        retorno = '{"Categorias":[{"id":64374,"atual":false,"nome":"Departamentos","url":"/departamentos"},{"id":64382,"atual":false,"nome":"Emagrecimento","url":"#","subcategorias":[{"id":64392,"atual":false,"nome":"Fibras Alimentares","url":"/fibras-alimentares","subcategorias":null},{"id":64393,"atual":false,"nome":"Termogênicos","url":"/termogenicos","subcategorias":null}]},{"id":64430,"atual":false,"nome":"Energia e Resistência ","url":"/energia-e-resistencia "},{"id":64375,"atual":false,"nome":"Massa Muscular","url":"/massa-muscular","subcategorias":[{"id":65223,"atual":false,"nome":"Aminoácidos","url":"/aminoacidos","subcategorias":null},{"id":65224,"atual":false,"nome":"Glutamina","url":"/glutamina","subcategorias":null},{"id":65225,"atual":false,"nome":"Pré-treino","url":"/pre-treino","subcategorias":null}]},{"id":64394,"atual":false,"nome":"Ofertas","url":"/ofertas"},{"id":64382,"atual":false,"nome":"Promoções","url":"/promocoes"},{"id":64382,"atual":false,"nome":"Proteínas","url":"/proteinas"}],"MenuPersonalizado":[],"Filtros":[]}';

        try {

            JSON.parse(retorno);

            ApiWS.Json = retorno;

            if (retorno.indexOf("erro") < 0) {
                try {
                    ApiWS.setCookie(NomeCookie, retorno, 2400);
                } catch (e) { }
            }

            eval(FuncaoAfter + "()");

        } catch (e) {

            console.log("Falha ListaCategorias " + e.message + " - " + retorno);
            if (ApiWS.ListaCategorias_Tentativas < 2) {
                window.setTimeout("ApiWS.ListaCategorias()", 500);
            }

        }

    } catch (e) { console.log(e.message); console.log("Falha ao listar categorias:" + e.message); }

}




ApiWS.FuncAfter_ListaProdutosPags = null;
ApiWS.ListaProdutosPags_Tentativas = 0;
ApiWS.ListaProdutosPags = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaProdutosPags = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaProdutosPags;
    }

    try {

        ApiWS.ListaProdutosPags_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();
        var InfoListagem = $("#HdVarInfoListagem").val();

        $.ajax({
            type: "POST",
            url: "/api-loja/produtos/listagem",
            data: "LOJA=" + ApiWS.LV + "&LvToken=" + Token + "&InfoListagem=" + InfoListagem,
            beforeSend: function () { },
            error: function (e) { console.log(e.message); console.log("Falha ao listar produtos subpáginas"); },
            success: function (retorno) {

                retorno = ApiWS.LimpaJson(retorno);

                try {

                    JSON.parse(retorno);

                    ApiWS.Json = retorno;
                    eval(FuncaoAfter + "()");

                } catch (e) {

                    console.log("Falha ListaProdutosPags " + e.message + " - " + retorno);
                    if (ApiWS.ListaProdutosPags_Tentativas < 2) {
                        window.setTimeout("ApiWS.ListaProdutosPags()", 500);
                    }

                }

            }
        });

    } catch (e) { console.log(e.message); console.log("Falha ao listar produtos subpáginas:" + e.message); }

}




ApiWS.FuncAfter_ListaFabricantes = null;
ApiWS.ListaFabricantes_Tentativas = 0;
ApiWS.ListaFabricantes = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaFabricantes = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaFabricantes;
    }

    try {

        ApiWS.ListaFabricantes_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();
        var InfoListagem = $("#HdVarInfoListagem").val();

        retorno = '{"fabricantes":[{"id":9668,"nome":"Maisto","url":"/fabricante/4924/9668/maisto.aspx","logotipo":"https://images.webstore.net.br/files/4924/Maisto_Logo(85x40).jpg"},{"id":9669,"nome":"Multilaser","url":"/fabricante/4924/9669/multilaser.aspx","logotipo":"https://images.webstore.net.br/files/4924/Logo Multilaser(69x40).jpg"},{"id":9670,"nome":"Multikids","url":"/fabricante/4924/9670/multikids.aspx","logotipo":"https://images.webstore.net.br/files/4924/Multikids(138x40).jpg"},{"id":9671,"nome":"Atrio","url":"/fabricante/4924/9671/atrio.aspx","logotipo":"https://images.webstore.net.br/files/4924/Logo-Atrio (129x40).jpg"},{"id":9672,"nome":"Mileno","url":"/fabricante/4924/9672/mileno.aspx","logotipo":"https://images.webstore.net.br/files/4924/Mileno(33x40).jpg"},{"id":9673,"nome":"Wilson","url":"/fabricante/4924/9673/wilson.aspx","logotipo":"https://images.webstore.net.br/files/4924/859_Wilson-Logo-Black(131x40).jpg"},{"id":9674,"nome":"Cobi","url":"/fabricante/4924/9674/cobi.aspx","logotipo":"https://images.webstore.net.br/files/4924/COBI SMALL-logo(51x40).jpg"},{"id":9675,"nome":"Xxray","url":"/fabricante/4924/9675/xxray.aspx","logotipo":"https://images.webstore.net.br/files/4924/Xxray-(139x40).jpg"},{"id":10481,"nome":"Califórnia Toys","url":"/fabricante/4924/10481/california-toys.aspx","logotipo":"https://images.webstore.net.br/files/4924/California Toys.jpg"},{"id":10482,"nome":"Welly","url":"/fabricante/4924/10482/welly.aspx","logotipo":"https://images.webstore.net.br/files/4924/Welly.jpg"}]}';

        try {

            JSON.parse(retorno);
        
            ApiWS.Json = retorno;

            if (retorno.indexOf("erro") < 0) {
                try {
                    ApiWS.setCookie(NomeCookie, retorno, 2400);
                } catch (e) { }
            }

            eval(FuncaoAfter + "()");

        } catch (e) {

            console.log("Falha ListaFabricantes " + e.message + " - " + retorno);
            if (ApiWS.ListaFabricantes_Tentativas < 2) {
                window.setTimeout("ApiWS.ListaFabricantes()", 500);
            }

        }


    } catch (e) { console.log(e.message); console.log("Falha ao listar fabricantes:" + e.message); }

}




ApiWS.FuncAfter_ListaBanners = null;
ApiWS.ListaBanners_Tentativas = 0;
ApiWS.ListaBanners = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_ListaBanners = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_ListaBanners;
    }

    var BUSCA = "";

    try { BUSCA = $("#LV_HD_BUSCA_VALOR").val(); } catch (e) { }

    if (BUSCA != undefined && BUSCA != "" && BUSCA != null) {

        ApiWS.Json = null;
        eval(FuncaoAfter + "()");

    } else {

        try {

            ApiWS.ListaBanners_Tentativas++;

            var Token = $("#HdTokenLojaTemp").val();
            var InfoListagem = $("#HdVarInfoListagem").val();

                        retorno = '{"banners":[{"id":10419,"titulo":"Range Evoque","tipo":"topo","conteudo":"","imagem":"img/banner.png","target":"_self","url":"https://cintrashop.com.br/miniatura-range-rover-evoque-com-luz-e-som-1-24","largura":0,"altura":0},{"id":10419,"titulo":"Range Evoque","tipo":"topo","conteudo":"","imagem":"img/banner.png","target":"_self","url":"https://cintrashop.com.br/miniatura-range-rover-evoque-com-luz-e-som-1-24","largura":0,"altura":0}]}';

                        try {

                            JSON.parse(retorno);

                            ApiWS.Json = retorno;
                            //console.log("banners:" + ApiWS.Json);

                            if (retorno.indexOf("erro") < 0) {
                                try {
                                    ApiWS.setCookie(NomeCookie, retorno, 2400);
                                } catch (e) { }
                            }

                            eval(FuncaoAfter + "()");

                        } catch (e) {

                            console.log("Falha ListaBanners " + e.message + " - " + retorno);
                            if (ApiWS.ListaBanners_Tentativas < 2) {
                                window.setTimeout("ApiWS.ListaBanners()", 500);
                            }

                        }


        } catch (e) { console.log(e.message); console.log("Falha ao listar banners:" + e.message); }

    }

}




ApiWS.FuncAfter_InfosLojas = null;
ApiWS.InfosLojas_Tentativas = 0;
ApiWS.InfosLojas = function (FuncaoAfter) {

    if (FuncaoAfter != null && FuncaoAfter != "") {
        ApiWS.FuncAfter_InfosLojas = FuncaoAfter;
    } else {
        FuncaoAfter = ApiWS.FuncAfter_InfosLojas;
    }

    try {

        ApiWS.InfosLojas_Tentativas++;

        var Token = $("#HdTokenLojaTemp").val();

        retorno = '{"menuinstitucional":[{"id":1351,"titulo":"Sobre Nós","tipo":"INT","url":"/sobre-nos"},{"id":1350,"titulo":"Como Comprar","tipo":"INT","url":"/como-comprar"},{"id":1759,"titulo":"Política de Privacidade","tipo":"INT","url":"/politica-de-privacidade"},{"id":1760,"titulo":"Garantia dos Produtos","tipo":"INT","url":"/garantia-dos-produtos"}],"dadoscontato":{"razao":"Claudemir dos Santos Cintra 05625448876","cnpj":"19.511.172/0001-58","pagina_contato":"/contato/4924/contato","fone_1":"(11) 4117-8421","fone_2":"","fone_3":"","email_1":"vendas@cintrashop.com.br","email_2":"atendimento@cintrashop.com.br","email_3":"","horario":"seg a sex das 9h às 17h\u003cbr\u003esáb das 9h às 12h","cep":"04166-003","endereco":"Avenida Padre Arlindo Vieira","numero":"","complemento":"*Obs: Não possuímos Loja Física","bairro":"","cidade":"Jardim Vergueiro","uf":"São Paulo"},"redes_sociais_lista":[{"id":5564,"nome":"Instagram","imagem":"/imagens_cliente/4924/REDSOC_180109195710.png","url":"http://https://www.instagram.com/cintrashop/"},{"id":5563,"nome":"Twitter","imagem":"/imagens_cliente/4924/REDSOC_180109195556.png","url":"http://https://twitter.com/cintrashop"},{"id":5562,"nome":"Facebook","imagem":"/imagens_cliente/4924/REDSOC_180109195401.png","url":"http://https://www.facebook.com/cintrashop"}],"redes_sociais":{"facebook":"cintrashop","twitter":"cintrashop","linkedin":null,"instagram":"cintrashop","youtube":null,"pinterest":null,"google":null},"links":{"meus_pedidos":"/pedidos/4924/pedidos","cadastro":"/cadastro/4924/cadastro","pagina_inicial":"/cintrashop","faleconosco":"/contato/4924/contato","login":"/login/4924/login","lista_casamento":null,"artigos":null,"cadastro_b2b":null,"carrinho":"/carrinho/4924/carrinho"},"estrutura":{"produtos_pagina":36,"produtos_linha":0,"menu_lateral":true,"menu_lateral_home":false,"tipo_listagem":"G","bandeiras_pagamento":"|1||2||3||4||5||6||7||8|","carrinho_compras":true,"carrinho_compras_texto":"Carrinho de compras","ultimos_vistos":true,"lista_casamento":false,"troca_fotos":true,"tipo_zoom":"0","captacao_email":false,"confirma_idade":false,"placeholder_busca":"O que deseja procurar?","modo":"1","preco_apos_login":false},"cliente":{"nome":null,"tipo_cliente":null}}';

        try {

            JSON.parse(retorno);

            ApiWS.Json = retorno;
            //console.log("InfosLojas:" + ApiWS.Json + " (" + "LOJA=" + ApiWS.LV + "&LvToken=" + Token + ")");

            if (retorno.indexOf("erro") < 0) {
                try {
                    ApiWS.setCookie(NomeCookie, retorno, 2400);
                } catch (e) { }
            }

            eval(FuncaoAfter + "()");

        } catch (e) {

            console.log("Falha InfosLojas " + e.message + " - " + retorno);
            if (ApiWS.InfosLojas_Tentativas < 2) {
                window.setTimeout("ApiWS.InfosLojas()", 500);
            }

        }


    } catch (e) { console.log(e.message); console.log("Erro ao verificar informações da loja:" + e.message); }

}




ApiWS.CadastraNews = function (Nome, Email, FuncaoAfter) {

    try {

        var Token = $("#HdTokenLojaTemp").val();

        if (Nome == "") {
            ApiWS.Json = "{\"status\":500,\"mensagem\":\"Preencha o campo nome.\"}";
            eval(FuncaoAfter + "()");
            return;
        }

        if (Email == "") {
            ApiWS.Json = "{\"status\":500,\"mensagem\":\"Preencha o campo e-mail.\"}";
            eval(FuncaoAfter + "()");
            return;
        }

        $.ajax({
            type: "POST",
            url: "/api-loja/cadastra-news",
            data: "LOJA=" + ApiWS.LV + "&LvToken=" + Token + "&Nome=" + Nome + "&Email=" + Email,
            beforeSend: function () { },
            error: function (e) { console.log("Erro ao cadastrar email de newsletter." + e.message); console.log("Erro ao cadastrar email de newsletter"); },
            success: function (retorno) {

                ApiWS.Json = retorno;
                eval(FuncaoAfter + "()");

            }
        });

    } catch (e) { console.log(e.message); console.log("Erro ao cadastrar email de newsletter:" + e.message); }

}




ApiWS.ImportFile = function (file, FuncaoAfter) {

    try {

        var Token = $("#HdTokenLojaTemp").val();

        var NomeCookie = "import_file_" + ApiWS.LV;
        while (NomeCookie.indexOf("|") >= 0 || NomeCookie.indexOf("_") >= 0) {
            NomeCookie = NomeCookie.replace("|", "").replace("_", "");
        }
        var Cookie = ApiWS.getCookie(NomeCookie)

        console.log("import_file:" + file);
        console.log("FuncaoAfter:" + FuncaoAfter);

        if (Cookie != "" && Cookie != null && Cookie != undefined) {

            ApiWS.FileReturn = Cookie;
            eval(FuncaoAfter + "()");

        } else {

            $.ajax({
                type: "POST",
                url: "/api-loja/importfile",
                data: "LOJA=" + ApiWS.LV + "&LvToken=" + Token + "&File=" + file,
                beforeSend: function () { },
                error: function (e) { console.log("Erro ao tentar importar arquivo." + e.message); },
                success: function (retorno) {

                    console.log("retorno import ok");

                    ApiWS.FileReturn = retorno;
                    
                    try {
                        ApiWS.setCookie(NomeCookie, retorno, 2400);
                    } catch (e) { }

                    eval(FuncaoAfter + "()");                   

                }
            });

        }

    } catch (e) { console.log(e.message); console.log("Falha ao importar arquivo " + file + ":" + e.message); }

}




ApiWS.setCookie = function (name, value, seconds) {

    try {

        var d = new Date();
        var m = d.getMinutes();
        var time = d.getHours();

        time = "";

        var Token = $("#HdTokenLojaTemp").val();
        var B2B = $("#LV_USU_B2B").val();
        var URL = window.location.href;
        if (URL.indexOf(":9696") >= 0) { return ""; }

        localStorage[time + Token + name + B2B] = value;

    } catch (e) { alert(e.message); }

}
ApiWS.getCookie = function (c_name) {

    try {

        var d = new Date();
        var m = d.getMinutes();
        var time = d.getHours();

        time = "";

        var Token = $("#HdTokenLojaTemp").val();
        var B2B = $("#LV_USU_B2B").val();
        var URL = window.location.href;
        if (URL.indexOf(":9696") >= 0) { return ""; }

        c_value = localStorage[time + Token + c_name + B2B];

        //if (c_value != "" && c_value != null) { console.log(c_name + " tinha valor."); }

        return c_value;

    } catch (e) { return ""; }

};



ApiWS.LimpaJson = function (json) {

    try {

        if (json.indexOf("}{") >= 0) {
            json = json.replace("}{", "}__DIVISAO__{");
            json = json.split("__DIVISAO__")[0];
        }

    } catch (e) { }

    return json;

}