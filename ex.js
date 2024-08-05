< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > AI Apps Directory < /title> <
    style >
    body {
        font - family: Arial, sans - serif;
        line - height: 1.6;
        margin: 0;
        padding: 20 px;
        background - color: #f4f4f4;
    }
    .container {
        max - width: 1200 px;
        margin: 0 auto;
    }
h1 {
    text - align: center;
}
.search - container {
    display: flex;
    margin - bottom: 20 px;
}#
search - input {
    flex - grow: 1;
    padding: 10 px;
    font - size: 16 px;
    border: 1 px solid# ddd;
    border - radius: 4 px 0 0 4 px;
}#
search - button {
        padding: 10 px 20 px;
        font - size: 16 px;
        background - color: #4CAF50;

            color: white;

            border: none;

            border-radius: 0 4px 4px 0;

            cursor: pointer;

        }

        .apps-grid {

            display: grid;

            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

            gap: 20px;

        }

        .app-card {

            background-color: white;

            border-radius: 4px;

            box-shadow: 0 2px 5px rgba(0,0,0,0.1);

            padding: 20px;

        }

        .app-card h2 {

            margin-top: 0;

        }

        .app-card a {

            display: inline-block;

            margin-top: 10px;

            color: # 4 CAF50;
        text - decoration: none;
    }
    .pagination {
        display: flex;
        justify - content: space - between;
        align - items: center;
        margin - top: 20 px;
    }
    .pagination button {
        padding: 10 px 20 px;
        font - size: 16 px;
        background - color: #4CAF50;

            color: white;

            border: none;

            border-radius: 4px;

            cursor: pointer;

        }

        .pagination button:disabled {

            background-color: # ddd;
        cursor: not - allowed;
    } <
    /style> <
    /head> <
    body >
    <
    div class = "container" >
    <
    h1 > AI Apps Directory < /h1> <
    div class = "search-container" >
    <
    input type = "text"
id = "search-input"
placeholder = "Search AI apps..." >
    <
    button id = "search-button" > Search < /button> <
    /div> <
    div id = "apps-grid"
class = "apps-grid" > < /div> <
    div class = "pagination" >
    <
    button id = "prev-button" > Previous < /button> <
    span id = "page-info" > < /span> <
    button id = "next-button" > Next < /button> <
    /div> <
    /div>

<
script >
    const aiApps = [
        { name: "ChatGPT", description: "OpenAI's conversational AI model", link: "https://chat.openai.com/" },
        { name: "DALL-E", description: "AI system that creates images from text descriptions", link: "https://openai.com/dall-e-2" },
        { name: "Midjourney", description: "AI-powered image generation tool", link: "https://www.midjourney.com/" },
        { name: "Jasper", description: "AI writing assistant for marketing copy", link: "https://www.jasper.ai/" },
        { name: "Synthesia", description: "AI video generation platform", link: "https://www.synthesia.io/" },
        { name: "Lensa", description: "AI-powered photo and video editing app", link: "https://prisma-ai.com/lensa" },
        { name: "Replika", description: "AI companion chatbot", link: "https://replika.ai/" },
        { name: "Stable Diffusion", description: "Open-source text-to-image AI model", link: "https://stability.ai/stable-diffusion" },
        { name: "RunwayML", description: "AI-powered creative tools for video editing", link: "https://runwayml.com/" },
        { name: "Anthropic Claude", description: "Large language model for various tasks", link: "https://www.anthropic.com/" },
        { name: "DeepL", description: "AI-powered translation tool", link: "https://www.deepl.com/" },
        { name: "Grammarly", description: "AI writing assistant for grammar and style", link: "https://www.grammarly.com/" },
        { name: "Otter.ai", description: "AI-powered transcription and note-taking", link: "https://otter.ai/" },
        { name: "Descript", description: "AI-powered audio and video editing", link: "https://www.descript.com/" },
        { name: "Copilot", description: "GitHub's AI pair programmer", link: "https://github.com/features/copilot" },
        { name: "Notion AI", description: "AI-powered writing assistant in Notion", link: "https://www.notion.so/product/ai" },
        { name: "Tome", description: "AI-powered storytelling and presentation tool", link: "https://tome.app/" },
        { name: "Pictory", description: "AI video creation from text", link: "https://pictory.ai/" },
        { name: "Copy.ai", description: "AI-powered copywriting tool", link: "https://www.copy.ai/" },
        { name: "Rytr", description: "AI writing assistant for various content types", link: "https://rytr.me/" },
        { name: "Writesonic", description: "AI-powered content creation platform", link: "https://writesonic.com/" },
        { name: "Fireflies.ai", description: "AI meeting assistant and transcription", link: "https://fireflies.ai/" },
        { name: "Krisp", description: "AI-powered noise cancellation for calls", link: "https://krisp.ai/" },
        { name: "Murf", description: "AI voice generator and text-to-speech", link: "https://murf.ai/" },
        { name: "Eleven Labs", description: "AI voice cloning and synthesis", link: "https://elevenlabs.io/" },
        { name: "Hugging Face", description: "Platform for sharing and using AI models", link: "https://huggingface.co/" },
        { name: "Voicemod", description: "AI voice changer and soundboard", link: "https://www.voicemod.net/" },
        { name: "Runwayml", description: "AI-powered video editing and generation", link: "https://runwayml.com/" },
        { name: "Gamma", description: "AI-powered presentation creation", link: "https://gamma.app/" },
        { name: "Designs.ai", description: "AI-powered design tools", link: "https://designs.ai/" },
    ];

let currentPage = 1;
const appsPerPage = 25;
let filteredApps = [...aiApps];

const appsGrid = document.getElementById('apps-grid');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const pageInfo = document.getElementById('page-info');

function renderApps() {
    const startIndex = (currentPage - 1) * appsPerPage;
    const endIndex = startIndex + appsPerPage;
    const currentApps = filteredApps.slice(startIndex, endIndex);

    appsGrid.innerHTML = '';
    currentApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
                    <h2>${app.name}</h2>
                    <p>${app.description}</p>
                    <a href="${app.link}" target="_blank">Visit Website</a>
                `;
        appsGrid.appendChild(appCard);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredApps.length / appsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

function search() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredApps = aiApps.filter(app =>
        app.name.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    renderApps();
}

searchButton.addEventListener('click', search);
searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        search();
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderApps();
    }
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredApps.length / appsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderApps();
    }
});

renderApps(); <
/script> <
/body> <
/html>