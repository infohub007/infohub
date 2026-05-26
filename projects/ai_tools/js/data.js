const tools = [


    // ---------- Video Tools ----------
    { name: "Pictory AI", category: "Video", subcategory: "Video Generation", desc: "AI-powered video creation from scripts and text content.", url: "https://pictory.ai", price: "Free/Paid" },
    { name: "Synthesia", category: "Video", subcategory: "Video Generation", desc: "Generate AI videos with virtual avatars and voiceovers.", url: "https://www.synthesia.io", price: "Paid" },
    { name: "Runway (Gen 2/4)", category: "Video", subcategory: "Video Generation", desc: "AI tool for generating and editing videos with text prompts.", url: "https://runwayml.com", price: "Paid" },
    { name: "DeepBrain AI", category: "Video", subcategory: "Video Generation", desc: "AI video generation with a focus on corporate and explainer videos.", url: "https://www.deepbrain.io", price: "Paid" },
    { name: "InVideo", category: "Video", subcategory: "Video Generation", desc: "Create AI-powered videos for YouTube and marketing content.", url: "https://invideo.io", price: "Free/Paid" },
    // Animation
    { name: "Animaker", category: "Video", subcategory: "Animation", desc: "Create animated videos and presentations easily using AI-powered templates.", url: "https://www.animaker.com", price: "Free/Paid" },
    { name: "Vyond", category: "Video", subcategory: "Animation", desc: "AI-assisted animation tool for making professional animated videos.", url: "https://www.vyond.com", price: "Paid" },
    { name: "Toonly", category: "Video", subcategory: "Animation", desc: "Drag-and-drop animated video creation software with AI support.", url: "https://www.toonly.com", price: "Paid" },
    { name: "Powtoon", category: "Video", subcategory: "Animation", desc: "AI-enhanced platform for animated explainer videos and presentations.", url: "https://www.powtoon.com", price: "Free/Paid" },
    { name: "Renderforest Animation Maker", category: "Video", subcategory: "Animation", desc: "Create animated videos, intros, and presentations with AI tools.", url: "https://www.renderforest.com/animation-maker", price: "Free/Paid" },
    // Video Editing
    { name: "Descript", category: "Video", subcategory: "Video Editing", desc: "Text-based video editing, podcast editing, and screen recording.", url: "https://www.descript.com", price: "Free/Paid" },
    { name: "CapCut", category: "Video", subcategory: "Video Editing", desc: "User-friendly video editing with AI-enhanced features.", url: "https://www.capcut.com", price: "Free" },
    { name: "Veed.io", category: "Video", subcategory: "Video Editing", desc: "All-in-one editor with AI tools for subtitles, translations, and effects.", url: "https://www.veed.io", price: "Free/Paid" },
    { name: "Pictory", category: "Video", subcategory: "Video Editing", desc: "AI video editing for marketers.", url: "https://pictory.ai", price: "Free/Paid" },
    { name: "Filmora by Wondershare", category: "Video", subcategory: "Video Editing", desc: "Cinematic video editing with AI tools and templates.", url: "https://filmora.wondershare.com", price: "Paid" },
    // Video Upscaling
    { name: "Topaz Video AI", category: "Video", subcategory: "Video Upscaling", desc: "Upscale videos up to 8K with AI-powered enhancement and noise reduction.", url: "https://www.topazlabs.com/video-enhance-ai", price: "Paid" },
    { name: "DVDFab Enlarger AI", category: "Video", subcategory: "Video Upscaling", desc: "AI video upscaling for improving resolution and clarity of videos.", url: "https://www.dvdfab.cn/enlarger-ai.htm", price: "Paid" },
    { name: "HitPaw Video Enhancer", category: "Video", subcategory: "Video Upscaling", desc: "Enhances and upscales videos using AI with minimal quality loss.", url: "https://www.hitpaw.com/video-enhancer.html", price: "Paid" },
    { name: "AVCLabs Video Enhancer AI", category: "Video", subcategory: "Video Upscaling", desc: "AI tool to upscale and enhance videos automatically.", url: "https://www.avclabs.com/video-enhancer-ai.html", price: "Paid" },
    { name: "Video2X", category: "Video", subcategory: "Video Upscaling", desc: "Open-source AI video upscaling and frame interpolation tool.", url: "https://github.com/k4yt3x/video2x", price: "Free" },
    // Screen Recording
    { name: "Loom", category: "Video", subcategory: "Screen Recording", desc: "AI-powered screen and video recording with instant sharing and editing features.", url: "https://www.loom.com", price: "Free/Paid" },
    { name: "OBS Studio", category: "Video", subcategory: "Screen Recording", desc: "Open-source screen recording and streaming software with AI plugin support.", url: "https://obsproject.com", price: "Free" },
    { name: "Screencast-O-Matic", category: "Video", subcategory: "Screen Recording", desc: "Screen recorder with AI-driven video editing and captioning tools.", url: "https://screencast-o-matic.com", price: "Free/Paid" },
    { name: "Camtasia", category: "Video", subcategory: "Screen Recording", desc: "Professional screen recording software with AI-assisted video editing.", url: "https://www.techsmith.com/camtasia.html", price: "Paid" },
    { name: "Movavi Screen Recorder", category: "Video", subcategory: "Screen Recording", desc: "AI-enhanced screen recording and editing for tutorials and presentations.", url: "https://www.movavi.com/screen-recorder/", price: "Paid" },
    // Motion Capture
    { name: "Rokoko Studio", category: "Video", subcategory: "Motion Capture", desc: "AI-powered motion capture for animators and game developers.", url: "https://www.rokoko.com", price: "Paid" },
    { name: "Xsens", category: "Video", subcategory: "Motion Capture", desc: "Full-body motion capture with AI-driven tracking and data analysis.", url: "https://www.xsens.com", price: "Paid" },
    { name: "DeepMotion", category: "Video", subcategory: "Motion Capture", desc: "AI motion capture platform for animating 3D characters from videos.", url: "https://www.deepmotion.com", price: "Paid" },
    { name: "iPi Soft", category: "Video", subcategory: "Motion Capture", desc: "Markerless motion capture software using AI for precise tracking.", url: "https://ipisoft.com", price: "Paid" },
    { name: "Adobe Mixamo", category: "Video", subcategory: "Motion Capture", desc: "AI-powered 3D character animation and motion capture library.", url: "https://www.mixamo.com", price: "Free" },
    // 3D Animation
    { name: "Blender", category: "Video", subcategory: "3D Animation", desc: "Open-source 3D creation suite with AI-assisted animation and modeling tools.", url: "https://www.blender.org", price: "Free" },
    { name: "Autodesk Maya", category: "Video", subcategory: "3D Animation", desc: "Professional 3D animation software with AI-driven rigging and animation features.", url: "https://www.autodesk.com/products/maya", price: "Paid" },
    { name: "Cinema 4D", category: "Video", subcategory: "3D Animation", desc: "3D modeling, animation, and rendering with AI-powered tools.", url: "https://www.maxon.net/en/cinema-4d", price: "Paid" },
    { name: "Houdini", category: "Video", subcategory: "3D Animation", desc: "AI-enhanced procedural 3D animation and visual effects software.", url: "https://www.sidefx.com", price: "Paid" },
    { name: "Mixamo", category: "Video", subcategory: "3D Animation", desc: "AI-assisted 3D character rigging and animation library.", url: "https://www.mixamo.com", price: "Free" },
    // Video Summarization
    { name: "Glasp Video Summarizer", category: "Video", subcategory: "Video Summarization", desc: "AI tool to summarize long videos into concise highlights.", url: "https://www.glasp.co", price: "Free/Paid" },
    { name: "Wisecut", category: "Video", subcategory: "Video Summarization", desc: "Automatically summarizes and edits videos using AI.", url: "https://www.wisecut.video", price: "Free/Paid" },
    { name: "Pictory", category: "Video", subcategory: "Video Summarization", desc: "AI-powered tool to generate short video highlights from long content.", url: "https://pictory.ai", price: "Free/Paidm" },
    { name: "Elai.io", category: "Video", subcategory: "Video Summarization", desc: "Generates summarized versions of videos for faster consumption.", url: "https://elai.io", price: "Paid" },
    { name: "Synthesia", category: "Video", subcategory: "Video Summarization", desc: "AI video platform capable of creating concise video summaries.", url: "https://www.synthesia.io", price: "Paid" },
    // Subtitles / Captions
    { name: "Rev.com", category: "Video", subcategory: "Subtitles / Captions", desc: "AI-powered video transcription and captioning service with high accuracy.", url: "https://www.rev.com", price: "Paid" },
    { name: "VEED.io", category: "Video", subcategory: "Subtitles / Captions", desc: "Automatically generates subtitles and captions for videos using AI.", url: "https://www.veed.io", price: "Free/Paid" },
    { name: "Kapwing", category: "Video", subcategory: "Subtitles / Captions", desc: "AI-driven video editor that creates subtitles and captions quickly.", url: "https://www.kapwing.com", price: "Free/Paid" },
    { name: "Descript", category: "Video", subcategory: "Subtitles / Captions", desc: "AI transcription and subtitle generation for video and audio content.", url: "https://www.descript.com", price: "Free/Paid" },
    { name: "Zubtitle", category: "Video", subcategory: "Subtitles / Captions", desc: "Automatically adds captions to videos using AI for social media ready content.", url: "https://zubtitle.com", price: "Paid" },
    // Special Effects
    { name: "HitFilm Express", category: "Video", subcategory: "Special Effects", desc: "Free video editing software with AI-assisted special effects and compositing.", url: "https://fxhome.com/hitfilm-express", price: "Free/Paid" },
    { name: "Adobe After Effects", category: "Video", subcategory: "Special Effects", desc: "Professional motion graphics and visual effects with AI-enhanced tools.", url: "https://www.adobe.com/products/aftereffects.html", price: "Paid" },
    { name: "Runway (Gen 4)", category: "Video", subcategory: "Special Effects", desc: "AI-powered tools for generating cinematic effects and visual enhancements.", url: "https://runwayml.com", price: "Paid" },
    { name: "Blackmagic Fusion", category: "Video", subcategory: "Special Effects", desc: "Node-based visual effects and motion graphics software with AI integration.", url: "https://www.blackmagicdesign.com/products/fusion", price: "Free/Paid" },
    { name: "Boris FX Optics", category: "Video", subcategory: "Special Effects", desc: "AI-enhanced visual effects, filters, and compositing tools for video creators.", url: "https://borisfx.com/products/optics/", price: "Paid" },

    // ---------- Text Tools ----------
    { name: "ChatGPT", category: "Text", subcategory: "Writing", desc: "Generates conversations, articles, summaries, and more using advanced AI language models.", url: "https://chat.openai.com", price: "Free/Paid" },
    { name: "Jasper AI", category: "Text", subcategory: "Writing", desc: "AI-powered tool for marketing copy, blog posts, and social media content creation.", url: "https://www.jasper.ai", price: "Paid" },
    { name: "Writesonic", category: "Text", subcategory: "Writing", desc: "Creates articles, ads, product descriptions, and other creative writing content.", url: "https://writesonic.com", price: "Free/Paid" },
    { name: "Grammarly", category: "Text", subcategory: "Writing", desc: "Checks grammar, style, tone, and clarity to improve your writing.", url: "https://www.grammarly.com", price: "Free/Paid" },
    { name: "Copy.ai", category: "Text", subcategory: "Writing", desc: "Generates blog posts, emails, and digital marketing copy with AI assistance.", url: "https://www.copy.ai", price: "Free/Paid" },


    // Chatbots
    { name: "DeepSeek", category: "Text", subcategory: "Chatbots", desc: "AI chatbot for intelligent search.", url: "https://www.deepseek.com", price: "Paid" },
    { name: "ChatGPT", category: "Text", subcategory: "Chatbots", desc: "Advanced conversational AI.", url: "https://chat.openai.com", price: "Free/Paid" },
    { name: "Gemini", category: "Text", subcategory: "Chatbots", desc: "Next-gen AI assistant.", url: "https://gemini.google.com", price: "Paid" },
    { name: "Copilot", category: "Text", subcategory: "Chatbots", desc: "AI coding assistant.", url: "https://github.com/features/copilot", price: "Paid" },
    { name: "Perplexity", category: "Text", subcategory: "Chatbots", desc: "Conversational AI with search integration.", url: "https://www.perplexity.ai", price: "Free/Paid" },

    // Summarization
    { name: "Jasper AI", category: "Text", subcategory: "Summarization", desc: "Summarizes long texts into concise summaries.", url: "https://www.jasper.ai", price: "Paid" },
    { name: "QuillBot", category: "Text", subcategory: "Summarization", desc: "Paraphrasing and summarization tool.", url: "https://quillbot.com", price: "Free/Paid" },
    { name: "2ThePoint", category: "Text", subcategory: "Summarization", desc: "Summarizes articles with a single click.", url: "https://2thepoint.com", price: "Free" },
    { name: "Summarizer.org", category: "Text", subcategory: "Summarization", desc: "Summarizes articles and essays; offers bullet points and best lines.", url: "https://summarizer.org", price: "Free" },
    { name: "ZeroGPT", category: "Text", subcategory: "Summarization", desc: "Summarizes text while maintaining context.", url: "https://www.zerogpt.com", price: "Free/Paid" },
    // Translation
    { name: "DeepL", category: "Text", subcategory: "Translation", desc: "AI-powered translation tool that produces highly accurate translations in multiple languages.", url: "https://www.deepl.com", price: "Free/Paid" },
    { name: "Google Translate", category: "Text", subcategory: "Translation", desc: "Widely used AI translation service supporting over 100 languages.", url: "https://translate.google.com", price: "Free" },
    { name: "Microsoft Translator", category: "Text", subcategory: "Translation", desc: "AI translation and transcription tool for text, speech, and documents.", url: "https://www.microsoft.com/translator", price: "Free/Paid" },
    { name: "Amazon Translate", category: "Text", subcategory: "Translation", desc: "Neural machine translation service for fast and accurate language translations.", url: "https://aws.amazon.com/translate/", price: "Paid" },
    { name: "LingvaNex", category: "Text", subcategory: "Translation", desc: "AI-powered translation platform for text, voice, and websites with multi-language support.", url: "https://lingvanex.com", price: "Free/Paid" },
    // Grammar Check
    { name: "Grammarly", category: "Text", subcategory: "Grammar Check", desc: "Checks grammar, punctuation, style, and tone to improve your writing.", url: "https://www.grammarly.com", price: "Free/Paid" },
    { name: "ProWritingAid", category: "Text", subcategory: "Grammar Check", desc: "AI-powered writing assistant for grammar, style, and readability improvements.", url: "https://prowritingaid.com", price: "Free/Paid" },
    { name: "Ginger", category: "Text", subcategory: "Grammar Check", desc: "Grammar, punctuation, and spell-checking AI tool with translation features.", url: "https://www.gingersoftware.com", price: "Free/Paid" },
    { name: "LanguageTool", category: "Text", subcategory: "Grammar Check", desc: "Open-source AI tool for grammar, style, and spell checking in multiple languages.", url: "https://languagetool.org", price: "Free/Paid" },
    { name: "Slick Write", category: "Text", subcategory: "Grammar Check", desc: "Analyzes your writing for grammar errors, potential stylistic mistakes, and other issues.", url: "https://www.slickwrite.com", price: "Free" },
    // SEO Content
    { name: "Surfer SEO", category: "Text", subcategory: "SEO Content", desc: "AI-powered tool for optimizing content to rank higher in search engines.", url: "https://surferseo.com", price: "Paid" },
    { name: "Frase", category: "Text", subcategory: "SEO Content", desc: "Creates SEO-focused content briefs and optimizes articles for better search rankings.", url: "https://www.frase.io", price: "Paid" },
    { name: "Writesonic", category: "Text", subcategory: "SEO Content", desc: "Generates blog posts, landing pages, and marketing copy optimized for SEO.", url: "https://writesonic.com", price: "Free/Paid" },
    { name: "ContentBot", category: "Text", subcategory: "SEO Content", desc: "AI writing assistant for creating SEO-friendly content, ads, and emails.", url: "https://contentbot.ai", price: "Free/Paid" },
    { name: "Copy.ai", category: "Text", subcategory: "SEO Content", desc: "Generates SEO-focused blog posts, social media content, and marketing copy.", url: "https://www.copy.ai", price: "Free/Paid" },
    // Email Drafting
    { name: "Lavender", category: "Text", subcategory: "Email Drafting", desc: "AI tool that helps write, optimize, and personalize professional emails.", url: "https://www.lavender.ai", price: "Paid" },
    { name: "Flowrite", category: "Text", subcategory: "Email Drafting", desc: "Generates ready-to-send emails and replies using AI assistance.", url: "https://www.flowrite.com", price: "Paid" },
    { name: "Copy.ai", category: "Text", subcategory: "Email Drafting", desc: "Creates persuasive and professional email content quickly using AI.", url: "https://www.copy.ai", price: "Free/Paid" },
    { name: "Smartwriter.ai", category: "Text", subcategory: "Email Drafting", desc: "AI platform for writing personalized email outreach and campaigns.", url: "https://www.smartwriter.ai", price: "Paid" },
    { name: "Grammarly", category: "Text", subcategory: "Email Drafting", desc: "Checks grammar, tone, and clarity to ensure polished email communication.", url: "https://www.grammarly.com", price: "Free/Paid" },
    // Storytelling
    { name: "Sudowrite", category: "Text", subcategory: "Storytelling", desc: "AI writing assistant for creative storytelling, helping authors brainstorm, continue, and enhance stories.", url: "https://www.sudowrite.com", price: "Paid" },
    { name: "AI Dungeon", category: "Text", subcategory: "Storytelling", desc: "Interactive AI storytelling platform that generates endless story adventures.", url: "https://play.aidungeon.io", price: "Free/Paid" },
    { name: "NovelAI", category: "Text", subcategory: "Storytelling", desc: "AI-powered tool to help authors write novels, stories, and creative fiction.", url: "https://novelai.net", price: "Paid" },
    { name: "StoryAI", category: "Text", subcategory: "Storytelling", desc: "Generates story ideas, plots, and complete stories using AI assistance.", url: "https://storyai.com", price: "Free/Paid" },
    { name: "Writesonic", category: "Text", subcategory: "Storytelling", desc: "Creates short stories, narratives, and creative content with AI.", url: "https://writesonic.com", price: "Free/Paid" },
    // Scriptwriting
    { name: "Final Draft AI", category: "Text", subcategory: "Scripts", desc: "AI-assisted screenwriting tool for creating professional scripts for film, TV, and theater.", url: "https://www.finaldraft.com", price: "Paid" },
    { name: "Celtx AI", category: "Text", subcategory: "Scripts", desc: "Scriptwriting and pre-production software with AI assistance for story and dialogue generation.", url: "https://www.celtx.com", price: "Paid" },
    { name: "WriterDuet", category: "Text", subcategory: "Scripts", desc: "Collaborative scriptwriting platform that uses AI to assist with story structure and dialogue.", url: "https://www.writerduet.com", price: "Free/Paid" },
    { name: "Plotagon", category: "Text", subcategory: "Scripts", desc: "AI-powered tool to create animated stories from written scripts.", url: "https://www.plotagon.com", price: "Paid" },
    { name: "Scrite AI", category: "Text", subcategory: "Scripts", desc: "AI tool for scriptwriting, analyzing dialogues, and formatting scripts professionally.", url: "https://www.scrite.com", price: "Free/Paid" },
    // Q&A Assistants
    { name: "Perplexity AI", category: "Text", subcategory: "Q&A Assistants", desc: "Conversational AI that answers questions with context-aware responses.", url: "https://www.perplexity.ai", price: "Free/Paid" },
    { name: "YouChat", category: "Text", subcategory: "Q&A Assistants", desc: "AI chat assistant that provides answers to questions and summarizes content.", url: "https://you.com/youchat", price: "Free/Paid" },
    { name: "Claude", category: "Text", subcategory: "Q&A Assistants", desc: "AI assistant by Anthropic designed for safe and accurate Q&A.", url: "https://www.anthropic.com/claude", price: "Paid" },
    { name: "ChatGPT", category: "Text", subcategory: "Q&A Assistants", desc: "OpenAI’s conversational AI capable of answering questions and generating explanations.", url: "https://chat.openai.com", price: "Free/Paid" },
    { name: "Elicit", category: "Text", subcategory: "Q&A Assistants", desc: "AI research assistant that answers research questions and summarizes papers.", url: "https://elicit.org", price: "Free/Paid" },

    // AI Art
    { name: "DALL·E 3", category: "Image", subcategory: "AI Art", desc: "Generates highly realistic and creative images from text prompts using OpenAI’s AI.", url: "https://openai.com/dall-e", price: "Free/Paid" },
    { name: "MidJourney", category: "Image", subcategory: "AI Art", desc: "AI platform for creating artistic and stylized images from text prompts.", url: "https://www.midjourney.com", price: "Paid" },
    { name: "Artbreeder", category: "Image", subcategory: "AI Art", desc: "Collaborative AI tool for creating and evolving artworks, portraits, and landscapes.", url: "https://www.artbreeder.com", price: "Free/Paid" },
    { name: "DeepArt", category: "Image", subcategory: "AI Art", desc: "Transforms photos into artworks in the style of famous artists using AI.", url: "https://deepart.io", price: "Paid" },
    { name: "NightCafe Studio", category: "Image", subcategory: "AI Art", desc: "AI art generator for creating creative artworks from text prompts or images.", url: "https://creator.nightcafe.studio", price: "Free/Paid" },


    // Generative Art
    { name: "Runway Gen-2", category: "Image", subcategory: "Generative Art", desc: "Generates unique artworks and animations from text or image prompts using AI.", url: "https://runwayml.com", price: "Paid" },
    { name: "DeepDream Generator", category: "Image", subcategory: "Generative Art", desc: "AI platform that creates dreamlike, surreal artworks from images.", url: "https://deepdreamgenerator.com", price: "Free/Paid" },
    { name: "Playground AI", category: "Image", subcategory: "Generative Art", desc: "Generates digital art and illustrations using text prompts and AI models.", url: "https://playgroundai.com", price: "Free/Paid" },
    { name: "Fotor AI Art Generator", category: "Image", subcategory: "Generative Art", desc: "Transforms ideas into artistic images with AI-driven generation.", url: "https://www.fotor.com/features/ai-image-generator", price: "Free/Paid" },
    { name: "StarryAI", category: "Image", subcategory: "Generative Art", desc: "AI tool for creating unique NFT-ready artworks from text prompts.", url: "https://www.starryai.com", price: "Free/Paid" },


    // Photo Editing 
    { name: "Adobe Photoshop", category: "Image", subcategory: "Photo Editing", desc: "Industry-standard photo editing with AI-powered tools.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
    { name: "Fotor", category: "Image", subcategory: "Photo Editing", desc: "AI photo editor for quick enhancements, retouching, and creative effects.", url: "https://www.fotor.com", price: "Free/Paid" },
    { name: "Pixlr", category: "Image", subcategory: "Photo Editing", desc: "Online AI photo editor with filters, effects, and automatic corrections.", url: "https://pixlr.com", price: "Free/Paid" },
    { name: "Remove.bg", category: "Image", subcategory: "Photo Editing", desc: "Automatically removes backgrounds from photos using AI.", url: "https://www.remove.bg", price: "Free/Paid" },
    { name: "Luminar Neo", category: "Image", subcategory: "Photo Editing", desc: "AI-powered photo editor with tools for sky replacement, relighting, and portrait enhancement.", url: "https://skylum.com/luminar", price: "Paid" },
    // Design
    { name: "Canva AI", category: "Image", subcategory: "Design", desc: "AI-powered design platform for creating graphics, presentations, and social media posts.", url: "https://www.canva.com", price: "Free/Paid" },
    { name: "Figma AI", category: "Image", subcategory: "Design", desc: "AI-assisted design tool for UI/UX, web, and mobile app designs.", url: "https://www.figma.com", price: "Free/Paid" },
    { name: "Adobe Express (formerly Spark)", category: "Image", subcategory: "Design", desc: "AI features for creating banners, social media graphics, and marketing materials.", url: "https://www.adobe.com/express", price: "Free/Paid" },
    { name: "Looka", category: "Image", subcategory: "Design", desc: "AI-powered logo and brand design platform.", url: "https://looka.com", price: "Paid" },
    { name: "Designify", category: "Image", subcategory: "Design", desc: "Automated AI design tool for creating professional visuals from images.", url: "https://www.designify.com", price: "Free/Paid" },
    // Background Removal
    { name: "Remove.bg", category: "Image", subcategory: "Background Removal", desc: "Automatically removes backgrounds from images with AI for quick editing.", url: "https://www.remove.bg", price: "Free/Paid" },
    { name: "Slazzer", category: "Image", subcategory: "Background Removal", desc: "AI tool to remove or replace image backgrounds instantly.", url: "https://www.slazzer.com", price: "Free/Paid" },
    { name: "Adobe Express Background Remover", category: "Image", subcategory: "Background Removal", desc: "AI-powered background removal integrated into Adobe Express for creative designs.", url: "https://www.adobe.com/express", price: "Free/Paid" },
    { name: "Fotor Background Remover", category: "Image", subcategory: "Background Removal", desc: "Quick AI tool for removing image backgrounds online.", url: "https://www.fotor.com/features/background-remover", price: "Free/Paid" },
    { name: "Pixlr BG Remover", category: "Image", subcategory: "Background Removal", desc: "AI-powered background removal for photos and graphics.", url: "https://pixlr.com/remove-background", price: "Free/Paid" },
    // Avatar Generators
    { name: "Ready Player Me", category: "Image", subcategory: "Avatar Generators", desc: "Create personalized 3D avatars for games, VR, and social apps using AI.", url: "https://readyplayer.me", price: "Free/Paid" },
    { name: "Avatar AI", category: "Image", subcategory: "Avatar Generators", desc: "Generate AI-powered avatars from photos with customizable styles.", url: "https://avatarai.app", price: "Free/Paid" },
    { name: "Dollify", category: "Image", subcategory: "Avatar Generators", desc: "Create cartoon-style avatars with AI-assisted tools.", url: "https://www.dollifyapp.com", price: "Free/Paid" },
    { name: "Fotor AI Avatar Maker", category: "Image", subcategory: "Avatar Generators", desc: "AI tool to generate personalized avatars for social media and profiles.", url: "https://www.fotor.com/features/ai-avatar", price: "Free/Paid" },
    { name: "Artbreeder Avatars", category: "Image", subcategory: "Avatar Generators", desc: "Blend and generate unique avatars using AI-powered generative tools.", url: "https://www.artbreeder.com", price: "Free/Paid" },
    // Image Upscaling
    { name: "Let's Enhance", category: "Image", subcategory: "Image Upscaling", desc: "AI-powered tool to upscale and enhance image quality without losing details.", url: "https://letsenhance.io", price: "Free/Paid" },
    { name: "Topaz Gigapixel AI", category: "Image", subcategory: "Image Upscaling", desc: "Uses AI to enlarge images up to 600% while maintaining clarity and detail.", url: "https://www.topazlabs.com/gigapixel-ai", price: "Paid" },
    { name: "VanceAI Image Enlarger", category: "Image", subcategory: "Image Upscaling", desc: "AI tool for enlarging and enhancing images automatically.", url: "https://vanceai.com/image-enlarger", price: "Free/Paid" },
    { name: "Upscale Pics", category: "Image", subcategory: "Image Upscaling", desc: "Online AI image upscaler to increase resolution and remove noise.", url: "https://www.upscalepics.com", price: "Free/Paid" },
    { name: "Icons8 Smart Upscaler", category: "Image", subcategory: "Image Upscaling", desc: "Upscale images using AI for better resolution and sharper details.", url: "https://icons8.com/upscaler", price: "Free/Paid" },
    // Style Transfer
    { name: "DeepArt.io", category: "Image", subcategory: "Style Transfer", desc: "Transform your photos into artworks using AI-powered style transfer techniques.", url: "https://deepart.io", price: "Free/Paid" },
    { name: "Prisma", category: "Image", subcategory: "Style Transfer", desc: "Apply artistic styles to your images using AI filters and neural networks.", url: "https://prisma-ai.com", price: "Free/Paid" },
    { name: "Fotor AI Art Effects", category: "Image", subcategory: "Style Transfer", desc: "AI tool for transforming photos into different artistic styles.", url: "https://www.fotor.com/features/ai-art-effects", price: "Free/Paid" },
    { name: "Deep Dream Generator", category: "Image", subcategory: "Style Transfer", desc: "Use AI to convert images into dreamlike, artistic interpretations.", url: "https://deepdreamgenerator.com", price: "Free/Paid" },
    { name: "Runway ML – Style Transfer", category: "Image", subcategory: "Style Transfer", desc: "Apply AI style transfer to videos and images for creative content.", url: "https://runwayml.com", price: "Paid" },
    // Memes / Fun Images
    { name: "Imgflip AI Meme Generator", category: "Image", subcategory: "Memes / Fun Images", desc: "Create memes automatically using AI-powered text-to-image features.", url: "https://imgflip.com/ai-meme", price: "Free/Paid" },
    { name: "Kapwing AI Meme Generator", category: "Image", subcategory: "Memes / Fun Images", desc: "AI tool to generate and customize memes quickly for social media.", url: "https://www.kapwing.com/tools/meme-generator", price: "Free/Paid" },
    { name: "Make a Meme", category: "Image", subcategory: "Memes / Fun Images", desc: "Simple AI-assisted meme creation platform.", url: "https://makeameme.org", price: "Free" },
    { name: "Meme AI by DeepAI", category: "Image", subcategory: "Memes / Fun Images", desc: "Generates humorous memes automatically using AI.", url: "https://deepai.org/machine-learning-model/meme-generator", price: "Free" },
    { name: "DALL·E for Fun Images", category: "Image", subcategory: "Memes / Fun Images", desc: "Create funny and creative images from text prompts using AI.", url: "https://openai.com/dall-e", price: "Free/Paid" },
    // 3D Models
    { name: "Spline AI", category: "Image", subcategory: "3D Models", desc: "Create and edit 3D models and scenes with AI-assisted design tools.", url: "https://spline.design", price: "Free/Paid" },
    { name: "NVIDIA Omniverse", category: "Image", subcategory: "3D Models", desc: "AI-powered platform for collaborative 3D design and simulations.", url: "https://developer.nvidia.com/nvidia-omniverse-platform", price: "Free/Paid" },
    { name: "Kaedim 3D AI", category: "Image", subcategory: "3D Models", desc: "Turn 2D concept art into 3D models using AI.", url: "https://www.kaedim3d.com", price: "Paid" },
    { name: "DeepMotion Animate 3D", category: "Image", subcategory: "3D Models", desc: "AI-powered motion capture to animate 3D characters automatically.", url: "https://www.deepmotion.com", price: "Free/Paid" },
    { name: "Daz 3D AI Tools", category: "Image", subcategory: "3D Models", desc: "AI-assisted 3D character creation and scene design platform.", url: "https://www.daz3d.com", price: "Free/Paid" },

    // ---------- Audio Tools ----------
    // Music Generation
    { name: "AIVA", category: "Audio", subcategory: "Music Generation", desc: "AI composer that creates original music for videos, games, and content.", url: "https://www.aiva.ai", price: "Free/Paid" },
    { name: "Amper Music", category: "Audio", subcategory: "Music Generation", desc: "Generates royalty-free music tracks using AI for content creators.", url: "https://www.ampermusic.com", price: "Free/Paid" },
    { name: "Soundraw", category: "Audio", subcategory: "Music Generation", desc: "AI-powered music generator that allows customization of compositions.", url: "https://soundraw.io", price: "Paid" },
    { name: "Boomy", category: "Audio", subcategory: "Music Generation", desc: "AI platform to quickly create, customize, and release music tracks.", url: "https://boomy.com", price: "Free/Paid" },
    { name: "Endlesss", category: "Audio", subcategory: "Music Generation", desc: "Collaborative AI-driven music creation and jam platform.", url: "https://endlesss.fm", price: "Free/Paid" },

    // Voice / TTS
    { name: "Murf AI", category: "Audio", subcategory: "Voice / TTS", desc: "AI text-to-speech platform with natural-sounding voices for presentations and videos.", url: "https://murf.ai", price: "Free/Paid" },
    { name: "Descript Overdub", category: "Audio", subcategory: "Voice / TTS", desc: "AI voice cloning and TTS tool for creating synthetic voices.", url: "https://www.descript.com/overdub", price: "Paid" },
    { name: "Play.ht", category: "Audio", subcategory: "Voice / TTS", desc: "Realistic AI voices for podcasts, articles, and content narration.", url: "https://play.ht", price: "Free/Paid" },
    { name: "Resemble AI", category: "Audio", subcategory: "Voice / TTS", desc: "Custom AI voice generation and TTS with multi-language support.", url: "https://www.resemble.ai", price: "Paid" },
    { name: "WellSaid Labs", category: "Audio", subcategory: "Voice / TTS", desc: "High-quality AI voice generation for e-learning, videos, and presentations.", url: "https://www.wellsaidlabs.com", price: "Paid" },


    // Sound Effects
    { name: "Boom Library AI", category: "Audio", subcategory: "Sound Effects", desc: "AI-assisted sound effect generation and library for films, games, and media.", url: "https://www.boomlibrary.com", price: "Paid" },
    { name: "Endlesss", category: "Audio", subcategory: "Sound Effects", desc: "Collaborative AI platform to create unique sound effects and music loops.", url: "https://endlesss.fm", price: "Free/Paid" },
    { name: "Soundraw", category: "Audio", subcategory: "Sound Effects", desc: "AI-driven tool to generate custom sound effects and audio content.", url: "https://soundraw.io", price: "Paid" },
    { name: "AIVA Sound Effects", category: "Audio", subcategory: "Sound Effects", desc: "AI tool for generating cinematic sound effects and audio cues.", url: "https://www.aiva.ai", price: "Free/Paid" },
    { name: "Boomy", category: "Audio", subcategory: "Sound Effects", desc: "AI platform to create music and sound effects instantly for various media.", url: "https://boomy.com", price: "Free/Paid" },

    // Noise Removal
    { name: "Krisp", category: "Audio", subcategory: "Noise Removal", desc: "AI-powered noise cancellation for calls, recordings, and streaming.", url: "https://krisp.ai", price: "Free/Paid" },
    { name: "Adobe Podcast (Enhance Speech)", category: "Audio", subcategory: "Noise Removal", desc: "AI tool to clean audio and remove background noise from recordings.", url: "https://podcast.adobe.com", price: "Free/Paid" },
    { name: "NVIDIA RTX Voice", category: "Audio", subcategory: "Noise Removal", desc: "AI-driven real-time noise removal for microphones and speakers.", url: "https://www.nvidia.com/en-us/geforce/technologies/rtx-voice/", price: "Free" },
    { name: "Descript Studio Sound", category: "Audio", subcategory: "Noise Removal", desc: "AI audio processing to remove noise and enhance voice quality.", url: "https://www.descript.com/studio-sound", price: "Free/Paid" },
    { name: "Auphonic", category: "Audio", subcategory: "Noise Removal", desc: "AI audio post-production platform that removes noise and balances levels.", url: "https://auphonic.com", price: "Free/Paid" },

    // Audio Enhancement
    { name: "iZotope RX", category: "Audio", subcategory: "Audio Enhancement", desc: "Professional AI-powered audio repair and enhancement suite for music and podcasts.", url: "https://www.izotope.com/en/products/rx.html", price: "Paid" },
    { name: "Adobe Podcast (Enhance Speech)", category: "Audio", subcategory: "Audio Enhancement", desc: "AI enhancement to improve voice clarity and overall audio quality.", url: "https://podcast.adobe.com", price: "Free/Paid" },
    { name: "Auphonic", category: "Audio", subcategory: "Audio Enhancement", desc: "AI-driven audio mastering and leveling for podcasts, music, and videos.", url: "https://auphonic.com", price: "Free/Paid" },
    { name: "Cedar DNS One", category: "Audio", subcategory: "Audio Enhancement", desc: "Real-time AI audio processing for noise reduction and enhancement.", url: "https://www.cedaraudio.com/products/dns-one/", price: "Paid" },
    { name: "LALAL.AI", category: "Audio", subcategory: "Audio Enhancement", desc: "AI stem separation and audio enhancement tool for music and voice.", url: "https://www.lalal.ai", price: "Free/Paid" },

    // Podcast Editing
    { name: "Descript", category: "Audio", subcategory: "Podcast Editing", desc: "AI-powered podcast editing, transcription, and audio cleanup.", url: "https://www.descript.com", price: "Free/Paid" },
    { name: "Alitu", category: "Audio", subcategory: "Podcast Editing", desc: "Automates podcast production with AI-powered editing and cleanup.", url: "https://alitu.com", price: "Paid" },
    { name: "Auphonic", category: "Audio", subcategory: "Podcast Editing", desc: "AI-based audio post-production for leveling, noise reduction, and mastering.", url: "https://auphonic.com", price: "Free/Paid" },
    { name: "Podcastle", category: "Audio", subcategory: "Podcast Editing", desc: "Record, edit, and enhance podcasts using AI tools.", url: "https://podcastle.ai", price: "Free/Paid" },
    { name: "Hindenburg Journalist", category: "Audio", subcategory: "Podcast Editing", desc: "Audio editing software with AI-assisted voice leveling and noise reduction.", url: "https://hindenburg.com", price: "Paid" },

    // Audio Transcription
    { name: "Otter.ai", category: "Audio", subcategory: "Audio Transcription", desc: "AI-powered transcription for meetings, lectures, and interviews with real-time captions.", url: "https://otter.ai", price: "Free/Paid" },
    { name: "Sonix", category: "Audio", subcategory: "Audio Transcription", desc: "Automatic transcription and translation powered by AI for audio and video files.", url: "https://sonix.ai", price: "Paid" },
    { name: "Trint", category: "Audio", subcategory: "Audio Transcription", desc: "AI transcription platform with editing tools and collaboration features.", url: "https://trint.com", price: "Paid" },
    { name: "Descript", category: "Audio", subcategory: "Audio Transcription", desc: "Transcribe audio/video files with AI and edit like a text document.", url: "https://www.descript.com", price: "Free/Paid" },
    { name: "Rev AI", category: "Audio", subcategory: "Audio Transcription", desc: "AI-driven transcription with high accuracy for speech-to-text applications.", url: "https://www.rev.com/ai", price: "Paid" },

    // Music Remixing
    { name: "Endlesss", category: "Audio", subcategory: "Music Remixing", desc: "Collaborative AI platform for creating music loops, remixes, and live jams.", url: "https://endlesss.fm", price: "Free/Paid" },
    { name: "AIVA", category: "Audio", subcategory: "Music Remixing", desc: "AI composer that can remix and generate music for different styles and moods.", url: "https://www.aiva.ai", price: "Free/Paid" },
    { name: "LANDR", category: "Audio", subcategory: "Music Remixing", desc: "AI-powered platform for music mastering and remixing tracks.", url: "https://www.landr.com", price: "Paid" },
    { name: "Splash", category: "Audio", subcategory: "Music Remixing", desc: "AI music creation platform for remixing, composing, and producing tracks.", url: "https://splashmusic.com", price: "Free/Paid" },
    { name: "Jukebox by OpenAI", category: "Audio", subcategory: "Music Remixing", desc: "Generates music and remixes using AI models trained on various genres.", url: "https://openai.com/research/jukebox", price: "Free" },

    // Voice Cloning
    { name: "Resemble AI", category: "Audio", subcategory: "Voice Cloning", desc: "AI voice cloning platform for creating custom synthetic voices.", url: "https://www.resemble.ai", price: "Paid" },
    { name: "iSpeech", category: "Audio", subcategory: "Voice Cloning", desc: "AI-powered text-to-speech and voice cloning services.", url: "https://www.ispeech.org", price: "Paid" },
    { name: "VocaliD", category: "Audio", subcategory: "Voice Cloning", desc: "Creates unique AI voices by blending real voices with synthetic models.", url: "https://www.vocalid.ai", price: "Paid" },
    { name: "Descript Overdub", category: "Audio", subcategory: "Voice Cloning", desc: "AI voice cloning feature to generate audio in your own voice.", url: "https://www.descript.com/overdub", price: "Free/Paid" },
    { name: "ElevenLabs", category: "Audio", subcategory: "Voice Cloning", desc: "High-quality AI voice cloning and text-to-speech platform.", url: "https://elevenlabs.io", price: "Free/Paid" },

    // Audio Analysis
    { name: "LANDR Analytics", category: "Audio", subcategory: "Audio Analysis", desc: "AI-powered analysis of tracks for loudness, frequency, and mastering quality.", url: "https://www.landr.com", price: "Paid" },
    { name: "Sonic Visualiser", category: "Audio", subcategory: "Audio Analysis", desc: "Open-source software for detailed visual analysis of audio files.", url: "https://www.sonicvisualiser.org", price: "Free" },
    { name: "AudioSet by Google", category: "Audio", subcategory: "Audio Analysis", desc: "Large-scale AI audio dataset for classification and research.", url: "https://research.google.com/audioset/", price: "Free" },
    { name: "Audionamix XTRAX STEMS", category: "Audio", subcategory: "Audio Analysis", desc: "Separates and analyzes audio tracks for stems and instruments.", url: "https://audionamix.com", price: "Paid" },
    { name: "Cyanite.ai", category: "Audio", subcategory: "Audio Analysis", desc: "AI music analysis platform for mood, genre, and instrumentation detection.", url: "https://cyanite.ai", price: "Paid" },

    // Photo Editing
    { name: "Adobe Photoshop (Neural Filters)", category: "Editing", subcategory: "Photo Editing", desc: "AI-powered photo editing with advanced neural filters for retouching and enhancements.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
    { name: "Luminar Neo", category: "Editing", subcategory: "Photo Editing", desc: "AI photo editor for retouching, sky replacement, and creative enhancements.", url: "https://skylum.com/luminar", price: "Paid" },
    { name: "Fotor", category: "Editing", subcategory: "Photo Editing", desc: "AI-powered photo editor with filters, effects, and enhancement tools.", url: "https://www.fotor.com", price: "Free/Paid" },
    { name: "Pixlr", category: "Editing", subcategory: "Photo Editing", desc: "Online AI photo editor for quick editing, retouching, and design.", url: "https://pixlr.com", price: "Free/Paid" },
    { name: "Canva", category: "Editing", subcategory: "Photo Editing", desc: "AI-powered photo editor with filters, effects, background removal, and design templates.", url: "https://www.canva.com", price: "Free/Paid" },


    // Video Editing
    { name: "Adobe Premiere Pro", category: "Editing", subcategory: "Video Editing", desc: "Professional video editing with AI features.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
    { name: "DaVinci Resolve", category: "Editing", subcategory: "Video Editing", desc: "AI-assisted video editing.", url: "https://www.blackmagicdesign.com/products/davinciresolve/", price: "Free/Paid" },
    { name: "Wondershare Filmora", category: "Editing", subcategory: "Video Editing", desc: "User-friendly AI video editing.", url: "https://filmora.wondershare.com", price: "Paid" },
    { name: "CapCut", category: "Editing", subcategory: "Video Editing", desc: "AI-powered video editing app with auto-captioning, scene detection, and templates for social media.", url: "https://www.capcut.com", price: "Free" },
    { name: "Descript", category: "Editing", subcategory: "Video Editing", desc: "Edit videos and podcasts by editing text, complete with AI overdub and automatic transcription.", url: "https://www.descript.com", price: "Free/Paid" },

    // Color Correction
    { name: "DaVinci Resolve", category: "Editing", subcategory: "Color Correction", desc: "Professional-grade AI color correction and grading tool used in Hollywood productions.", url: "https://www.blackmagicdesign.com/products/davinciresolve", price: "Free/Paid" },
    { name: "Adobe Premiere Pro", category: "Editing", subcategory: "Color Correction", desc: "Includes AI-based color matching and auto-tone tools for professional video editing.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
    { name: "ColorLab AI", category: "Editing", subcategory: "Color Correction", desc: "AI-driven film color grading platform that automates look creation and matching.", url: "https://www.colorlab.ai", price: "Paid" },
    { name: "LUT Generator AI", category: "Editing", subcategory: "Color Correction", desc: "Automatically generates LUTs (Look-Up Tables) based on visual references using AI.", url: "https://lutcreator.com", price: "Free/Paid" },
    { name: "Pixop", category: "Editing", subcategory: "Color Correction", desc: "AI-powered video remastering and color enhancement platform for professional video restoration.", url: "https://www.pixop.com", price: "Paid" },

    // Image Retouching
    { name: "Luminar Neo", category: "Editing", subcategory: "Image Retouching", desc: "AI-powered photo editor with tools for skin retouching, portrait enhancement, and background cleanup.", url: "https://skylum.com/luminar", price: "Paid" },
    { name: "Fotor", category: "Editing", subcategory: "Image Retouching", desc: "AI photo retoucher for portraits, blemish removal, and lighting adjustments.", url: "https://www.fotor.com", price: "Free/Paid" },
    { name: "Pixlr", category: "Editing", subcategory: "Image Retouching", desc: "Online AI photo editor for quick touch-ups, background fixes, and effects.", url: "https://pixlr.com", price: "Free/Paid" },
    { name: "BeFunky", category: "Editing", subcategory: "Image Retouching", desc: "AI retouching and portrait enhancement with wrinkle remover and teeth whitener.", url: "https://www.befunky.com", price: "Free/Paid" },
    { name: "PhotoWorks", category: "Editing", subcategory: "Image Retouching", desc: "AI-based retouching software for portraits and automatic skin tone correction.", url: "https://photo-works.net", price: "Paid" },

    // Video Stabilization
    { name: "Adobe Premiere Pro", category: "Editing", subcategory: "Video Stabilization", desc: "Professional video editing suite with built-in Warp Stabilizer for smooth footage.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
    { name: "DaVinci Resolve", category: "Editing", subcategory: "Video Stabilization", desc: "Advanced video editor with AI-driven stabilization and motion tracking tools.", url: "https://www.blackmagicdesign.com/products/davinciresolve", price: "Free/Paid" },
    { name: "Shaky Video Stabilizer", category: "Editing", subcategory: "Video Stabilization", desc: "Simple online AI tool that stabilizes shaky videos automatically.", url: "https://shakyvideo.com", price: "Free/Paid" },
    { name: "Deshake (VirtualDub Plugin)", category: "Editing", subcategory: "Video Stabilization", desc: "Plugin for VirtualDub that reduces camera shake in video footage.", url: "https://www.virtualdub.org", price: "Free" },
    { name: "Gyroflow", category: "Editing", subcategory: "Video Stabilization", desc: "Open-source stabilization tool using gyro data for perfectly steady videos.", url: "https://gyroflow.xyz", price: "Free" },

    // Cropping / Resizing
    { name: "Pixlr", category: "Editing", subcategory: "Cropping / Resizing", desc: "Online AI photo editor that allows quick cropping, resizing, and smart adjustments.", url: "https://pixlr.com", price: "Free/Paid" },
    { name: "Fotor", category: "Editing", subcategory: "Cropping / Resizing", desc: "AI-powered photo editor with smart crop and resize options for all image formats.", url: "https://www.fotor.com", price: "Free/Paid" },
    { name: "Canva", category: "Editing", subcategory: "Cropping / Resizing", desc: "AI-assisted design tool that includes smart image cropping and auto-resize for different platforms.", url: "https://www.canva.com", price: "Free/Paid" },
    { name: "Remove.bg Resize", category: "Editing", subcategory: "Cropping / Resizing", desc: "Resize and crop images automatically after background removal using AI precision.", url: "https://www.remove.bg", price: "Free/Paid" },
    { name: "Photopea", category: "Editing", subcategory: "Cropping / Resizing", desc: "Free online Photoshop alternative supporting cropping, resizing, and AI-powered editing.", url: "https://www.photopea.com", price: "Free" },

    // Filters / Effects
    { name: "Luminar Neo", category: "Editing", subcategory: "Filters / Effects", desc: "AI-powered photo editor offering creative filters, cinematic effects, and intelligent enhancements.", url: "https://skylum.com/luminar", price: "Paid" },
    { name: "Prisma", category: "Editing", subcategory: "Filters / Effects", desc: "Turns photos into art using AI filters inspired by famous artists and styles.", url: "https://prisma-ai.com", price: "Free/Paid" },
    { name: "BeFunky", category: "Editing", subcategory: "Filters / Effects", desc: "All-in-one photo editor with AI filters, effects, and aesthetic adjustments.", url: "https://www.befunky.com", price: "Free/Paid" },
    { name: "Picsart", category: "Editing", subcategory: "Filters / Effects", desc: "AI-based creative platform for adding smart filters, effects, and instant photo enhancements.", url: "https://picsart.com", price: "Free/Paid" },
    { name: "Fotor Effects", category: "Editing", subcategory: "Filters / Effects", desc: "AI-driven photo effects and filters to enhance color, lighting, and style automatically.", url: "https://www.fotor.com/features/photo-effects", price: "Free/Paid" },

    // Collage Making
    { name: "Canva", category: "Editing", subcategory: "Collage Making", desc: "AI-powered collage maker with customizable layouts, drag-and-drop design, and smart alignment tools.", url: "https://www.canva.com", price: "Free/Paid" },
    { name: "Fotor", category: "Editing", subcategory: "Collage Making", desc: "Online collage maker with AI templates, filters, and automatic photo arrangement.", url: "https://www.fotor.com", price: "Free/Paid" },
    { name: "BeFunky", category: "Editing", subcategory: "Collage Making", desc: "AI collage maker with one-click layouts, text effects, and smart photo alignment.", url: "https://www.befunky.com", price: "Free/Paid" },
    { name: "Adobe Express", category: "Editing", subcategory: "Collage Making", desc: "Quick collage creation tool with AI design suggestions and smart resizing.", url: "https://www.adobe.com/express", price: "Free/Paid" },
    { name: "Pixlr", category: "Editing", subcategory: "Collage Making", desc: "AI collage and photo editor with customizable grids, layouts, and templates.", url: "https://pixlr.com", price: "Free/Paid" },

    // Template Editing
    { name: "Canva", category: "Editing", subcategory: "Template Editing", desc: "AI-powered templates for social media, presentations, posters, and more, with easy editing.", url: "https://www.canva.com", price: "Free/Paid" },
    { name: "Adobe Express", category: "Editing", subcategory: "Template Editing", desc: "Provides AI-assisted design templates for graphics, videos, and web content.", url: "https://www.adobe.com/express", price: "Free/Paid" },
    { name: "Crello (VistaCreate)", category: "Editing", subcategory: "Template Editing", desc: "AI-assisted editable templates for social media, ads, and marketing visuals.", url: "https://crello.com", price: "Free/Paid" },
    { name: "Snappa", category: "Editing", subcategory: "Template Editing", desc: "Easy-to-use AI template editor for creating online graphics quickly.", url: "https://snappa.com", price: "Free/Paid" },
    { name: "Fotor Templates", category: "Editing", subcategory: "Template Editing", desc: "AI-based ready-to-edit templates for posters, cards, social media posts, and more.", url: "https://www.fotor.com", price: "Free/Paid" },

    // Background Removal
    { name: "Remove.bg", category: "Editing", subcategory: "Background Removal", desc: "Instant AI background removal.", url: "https://www.remove.bg", price: "Free/Paid" },
    { name: "PhotoRoom", category: "Editing", subcategory: "Background Removal", desc: "AI background removal & editing.", url: "https://www.photoroom.com", price: "Free/Paid" },
    { name: "Canva Background Remover", category: "Editing", subcategory: "Background Removal", desc: "Design tool with AI background remover.", url: "https://www.canva.com/features/background-remover/", price: "Free/Paid" },
    { name: "Photoshop Background Remover", category: "Editing", subcategory: "Background Removal", desc: "Professional AI background removal tools.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
    { name: "Aiarty Image Matting", category: "Editing", subcategory: "Background Removal", desc: "Advanced AI background removal.", url: "https://www.aiarty.com", price: "Paid" },
    // Code / Programming AI
    { name: "GitHub Copilot", category: "Code", subcategory: "Code / Programming AI", desc: "AI-powered code completion and suggestions integrated directly into your IDE.", url: "https://github.com/features/copilot", price: "Paid" },
    { name: "Tabnine", category: "Code", subcategory: "Code / Programming AI", desc: "AI code assistant for autocompletion and intelligent code suggestions.", url: "https://www.tabnine.com", price: "Free/Paid" },
    { name: "Codeium", category: "Code", subcategory: "Code / Programming AI", desc: "Free AI-powered coding assistant supporting multiple languages and IDEs.", url: "https://codeium.com", price: "Free" },
    { name: "Replit Ghostwriter", category: "Code", subcategory: "Code / Programming AI", desc: "AI coding assistant built into Replit for code completion, error fixing, and suggestions.", url: "https://replit.com", price: "Free/Paid" },
    { name: "Kite", category: "Code", subcategory: "Code / Programming AI", desc: "AI-powered code completions for Python, JavaScript, and other languages.", url: "https://www.kite.com", price: "Free/Paid" },


    // Data Analysis / AI Analytics
    { name: "ChatGPT (OpenAI)", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI assistant capable of analyzing data, generating reports, and answering queries.", url: "https://chat.openai.com", price: "Free/Paid" },
    { name: "Claude AI", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI-powered analytics assistant for data queries and summarization.", url: "https://www.anthropic.com/claude", price: "Paid" },
    { name: "Perplexity AI", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI tool for querying datasets and generating insights.", url: "https://www.perplexity.ai", price: "Free/Paid" },
    { name: "You.com AI", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI-driven platform for searching, summarizing, and analyzing data.", url: "https://you.com", price: "Free/Paid" },
    { name: "AIDungeon Analytics", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "Uses AI to analyze text and datasets for patterns and insights.", url: "https://play.aidungeon.io", price: "Free/Paid" },

    // Code Generation
    { name: "GitHub Copilot", category: "Code", subcategory: "Code Generation", desc: "AI-powered code completion and generation integrated into IDEs for multiple programming languages.", url: "https://github.com/features/copilot", price: "Paid" },
    { name: "OpenAI Codex", category: "Code", subcategory: "Code Generation", desc: "Generates code from natural language prompts in multiple programming languages.", url: "https://openai.com/codex", price: "Paid" },
    { name: "Tabnine", category: "Code", subcategory: "Code Generation", desc: "AI assistant for autocompletion and intelligent code generation.", url: "https://www.tabnine.com", price: "Free/Paid" },
    { name: "Replit Ghostwriter", category: "Code", subcategory: "Code Generation", desc: "Generates and completes code within the Replit IDE using AI assistance.", url: "https://replit.com", price: "Free/Paid" },
    { name: "Codeium", category: "Code", subcategory: "Code Generation", desc: "Free AI-powered code generation and autocompletion tool for multiple languages.", url: "https://codeium.com", price: "Free" },

    // Debugging Tools
    { name: "DeepCode (Snyk Code)", category: "Code", subcategory: "Debugging Tools", desc: "AI-powered static code analysis that finds bugs and security vulnerabilities.", url: "https://snyk.io/product/code/", price: "Free/Paid" },
    { name: "Codiga", category: "Code", subcategory: "Debugging Tools", desc: "Automated code review and bug detection using AI.", url: "https://www.codiga.io", price: "Free/Paid" },
    { name: "Ponicode", category: "Code", subcategory: "Debugging Tools", desc: "Generates unit tests and detects bugs in your code using AI.", url: "https://www.ponicode.com", price: "Free/Paid" },
    { name: "Embold", category: "Code", subcategory: "Debugging Tools", desc: "AI-driven code analysis platform to identify errors and quality issues.", url: "https://www.embold.io", price: "Paid" },
    { name: "SonarQube with AI Plugins", category: "Code", subcategory: "Debugging Tools", desc: "AI-assisted static code analysis and bug detection for multiple languages.", url: "https://www.sonarqube.org", price: "Free/Paid" },

    // API Integration
    { name: "Postman AI", category: "Code", subcategory: "API Integration", desc: "AI-assisted API testing, documentation, and integration.", url: "https://www.postman.com", price: "Free/Paid" },
    { name: "RapidAPI AI", category: "Code", subcategory: "API Integration", desc: "Discover, connect, and test APIs with AI-powered recommendations.", url: "https://rapidapi.com", price: "Free/Paid" },
    { name: "Kong Konnect", category: "Code", subcategory: "API Integration", desc: "AI-enhanced API management and integration platform.", url: "https://konghq.com", price: "Paid" },
    { name: "APIMatic", category: "Code", subcategory: "API Integration", desc: "AI-assisted code generation for API SDKs and integration.", url: "https://www.apimatic.io", price: "Free/Paid" },
    { name: "Stoplight", category: "Code", subcategory: "API Integration", desc: "Design, mock, and document APIs with AI-driven suggestions.", url: "https://stoplight.io", price: "Free/Paid" },

    // Database Tools
    { name: "SQLGPT", category: "Code", subcategory: "Database Tools", desc: "AI assistant for generating SQL queries and analyzing database structures.", url: "https://sqlgpt.io", price: "Free/Paid" },
    { name: "AI2SQL", category: "Code", subcategory: "Database Tools", desc: "Generates SQL queries from natural language prompts using AI.", url: "https://www.ai2sql.com", price: "Free/Paid" },
    { name: "SeekWell", category: "Code", subcategory: "Database Tools", desc: "AI-powered platform for querying databases and automating reports.", url: "https://www.seekwell.io", price: "Paid" },
    { name: "Text2SQL (OpenAI)", category: "Code", subcategory: "Database Tools", desc: "Uses AI to convert plain language into SQL queries.", url: "https://openai.com", price: "Paid" },
    { name: "Dbdiagram.io AI", category: "Code", subcategory: "Database Tools", desc: "AI-assisted database schema generation and visualization.", url: "https://dbdiagram.io", price: "Free/Paid" },

    // Code Refactoring
    { name: "Refactor.ai", category: "Code", subcategory: "Code Refactoring", desc: "AI-powered tool to refactor and optimize code for readability and performance.", url: "https://refactor.ai", price: "Paid" },
    { name: "Codiga", category: "Code", subcategory: "Code Refactoring", desc: "AI-driven code improvement, refactoring suggestions, and automated fixes.", url: "https://www.codiga.io", price: "Free/Paid" },
    { name: "DeepCode (Snyk Code)", category: "Code", subcategory: "Code Refactoring", desc: "AI-assisted code analysis and refactoring recommendations.", url: "https://snyk.io/product/code/", price: "Free/Paid" },
    { name: "IntelliCode (Visual Studio)", category: "Code", subcategory: "Code Refactoring", desc: "AI-powered code suggestions and refactoring within Visual Studio.", url: "https://visualstudio.microsoft.com/services/intellicode/", price: "Free/Paid" },
    { name: "PyCharm Code With Me + AI", category: "Code", subcategory: "Code Refactoring", desc: "AI-assisted code optimization and refactoring for Python projects.", url: "https://www.jetbrains.com/pycharm/", price: "Free/Paid" },

    // No-Code AI Platforms
    { name: "Levity", category: "Code", subcategory: "No-Code AI Platforms", desc: "Automate tasks and workflows using AI without writing code.", url: "https://www.levity.ai", price: "Paid" },
    { name: "Obviously AI – Excel AI", category: "Code", subcategory: "No-Code AI Platforms", desc: "AI integration in spreadsheets for predictions and data insights.", url: "https://www.obviously.ai", price: "Free/Paid" },
    { name: "FloydHub", category: "Code", subcategory: "No-Code AI Platforms", desc: "Cloud platform for training and deploying AI models without deep coding.", url: "https://www.floydhub.com", price: "Paid" },
    { name: "Softr", category: "Code", subcategory: "No-Code AI Platforms", desc: "Build web apps and workflows without coding; integrates AI for smarter automation.", url: "https://www.softr.io", price: "Free/Paid" },
    { name: "Airtable", category: "Code", subcategory: "No-Code AI Platforms", desc: "No-code platform to create custom apps, databases, and workflows; supports AI integrations.", url: "https://airtable.com", price: "Free/Paid" },

    // Automation Scripts
    { name: "Zapier AI", category: "Code", subcategory: "Automation Scripts", desc: "Automate workflows across apps using AI-powered triggers and actions.", url: "https://zapier.com", price: "Free/Paid" },
    { name: "Make (formerly Integromat)", category: "Code", subcategory: "Automation Scripts", desc: "AI-assisted automation to connect apps and automate tasks.", url: "https://www.make.com", price: "Free/Paid" },
    { name: "Parabola", category: "Code", subcategory: "Automation Scripts", desc: "Automate data workflows and business processes using AI.", url: "https://parabola.io", price: "Paid" },
    { name: "Tray.io", category: "Code", subcategory: "Automation Scripts", desc: "AI-powered automation platform for complex enterprise workflows.", url: "https://tray.io", price: "Paid" },
    { name: "Activepieces", category: "Code", subcategory: "Automation Scripts", desc: "Open-source AI-driven workflow automation platform.", url: "https://activepieces.com", price: "Free/Paid" },

    // Algorithm Optimization
    { name: "Google AutoML", category: "Code", subcategory: "Algorithm Optimization", desc: "Automatically optimizes machine learning models and algorithms for performance.", url: "https://cloud.google.com/automl", price: "Paid" },
    { name: "H2O.ai Driverless AI", category: "Code", subcategory: "Algorithm Optimization", desc: "AI platform for automatic feature engineering, model tuning, and optimization.", url: "https://www.h2o.ai/products/h2o-driverless-ai/", price: "Paid" },
    { name: "DataRobot", category: "Code", subcategory: "Algorithm Optimization", desc: "Automates machine learning model selection, tuning, and optimization.", url: "https://www.datarobot.com", price: "Paid" },
    { name: "Weights & Biases", category: "Code", subcategory: "Algorithm Optimization", desc: "Tool for tracking, optimizing, and comparing ML experiments and algorithms.", url: "https://wandb.ai", price: "Free/Paid" },
    { name: "Optuna", category: "Code", subcategory: "Algorithm Optimization", desc: "Open-source framework for hyperparameter optimization and algorithm tuning.", url: "https://optuna.org", price: "Free" },

    // SEO Analysis
    { name: "Semrush", category: "Marketing", subcategory: "SEO Analysis", desc: "Comprehensive SEO analytics and AI-powered insights for improving website ranking.", url: "https://www.semrush.com", price: "Paid" },
    { name: "Ahrefs", category: "Marketing", subcategory: "SEO Analysis", desc: "SEO toolset for backlink analysis, keyword research, and AI-driven recommendations.", url: "https://ahrefs.com", price: "Paid" },
    { name: "Moz Pro", category: "Marketing", subcategory: "SEO Analysis", desc: "AI-powered SEO software for site audits, keyword research, and rank tracking.", url: "https://moz.com/products/pro", price: "Paid" },
    { name: "Ubersuggest", category: "Marketing", subcategory: "SEO Analysis", desc: "AI-assisted SEO tool for keyword research, backlink analysis, and site audits.", url: "https://neilpatel.com/ubersuggest/", price: "Free/Paid" },
    { name: "SE Ranking", category: "Marketing", subcategory: "SEO Analysis", desc: "AI-based SEO platform for website auditing, competitor analysis, and keyword tracking.", url: "https://seranking.com", price: "Paid" },

    // Content Generation
    { name: "Jasper AI", category: "Marketing", subcategory: "Content Generation", desc: "AI-powered tool for creating marketing copy, blog posts, and social media content.", url: "https://www.jasper.ai", price: "Paid" },
    { name: "Copy.ai", category: "Marketing", subcategory: "Content Generation", desc: "Generates blog posts, emails, and ad copy using AI.", url: "https://www.copy.ai", price: "Free/Paid" },
    { name: "Writesonic", category: "Marketing", subcategory: "Content Generation", desc: "AI tool for creating landing pages, ads, and long-form content quickly.", url: "https://writesonic.com", price: "Free/Paid" },
    { name: "Rytr", category: "Marketing", subcategory: "Content Generation", desc: "AI writing assistant for generating content in multiple languages and tones.", url: "https://rytr.me", price: "Free/Paid" },
    { name: "Anyword", category: "Marketing", subcategory: "Content Generation", desc: "AI-driven content creation and optimization platform for ads and marketing.", url: "https://anyword.com", price: "Paid" },

    // Social Media Tools
    { name: "Lately AI", category: "Marketing", subcategory: "Social Media Tools", desc: "AI platform that generates social media posts from long-form content.", url: "https://www.lately.ai", price: "Paid" },
    { name: "Buffer", category: "Marketing", subcategory: "Social Media Tools", desc: "AI-assisted social media scheduling, analytics, and content optimization.", url: "https://buffer.com", price: "Free/Paid" },
    { name: "Hootsuite", category: "Marketing", subcategory: "Social Media Tools", desc: "AI tools for social media management, analytics, and scheduling.", url: "https://hootsuite.com", price: "Paid" },
    { name: "Canva Content Planner", category: "Marketing", subcategory: "Social Media Tools", desc: "AI-powered social media content creation and scheduling tool.", url: "https://www.canva.com/content-planner", price: "Free/Paid" },
    { name: "Later", category: "Marketing", subcategory: "Social Media Tools", desc: "AI-assisted social media scheduling and analytics platform.", url: "https://later.com", price: "Free/Paid" },

    // Email Campaigns
    { name: "Mailchimp", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-powered email marketing platform for automation, personalization, and analytics.", url: "https://mailchimp.com", price: "Free/Paid" },
    { name: "HubSpot Email Marketing", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-assisted tool for designing, automating, and analyzing email campaigns.", url: "https://www.hubspot.com/products/marketing/email", price: "Free/Paid" },
    { name: "Sendinblue", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-driven email marketing platform with automation and analytics features.", url: "https://www.sendinblue.com", price: "Free/Paid" },
    { name: "ActiveCampaign", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-assisted marketing automation and email campaign platform.", url: "https://www.activecampaign.com", price: "Paid" },
    { name: "Moosend", category: "Marketing", subcategory: "Email Campaigns", desc: "AI-powered email marketing platform for personalization and automation.", url: "https://moosend.com", price: "Free/Paid" },

    // Analytics / Insights
    { name: "Google Analytics 4", category: "Marketing", subcategory: "Analytics / Insights", desc: "AI-powered analytics platform for tracking website and app performance.", url: "https://analytics.google.com", price: "Free" },
    { name: "Tableau", category: "Marketing", subcategory: "Analytics / Insights", desc: "Data visualization and AI-driven insights for marketing analytics.", url: "https://www.tableau.com", price: "Paid" },
    { name: "Adobe Analytics", category: "Marketing", subcategory: "Analytics / Insights", desc: "AI-enhanced analytics for real-time customer insights and reporting.", url: "https://www.adobe.com/analytics", price: "Paid" },
    { name: "Zoho Analytics", category: "Marketing", subcategory: "Analytics / Insights", desc: "AI-assisted business intelligence and analytics platform.", url: "https://www.zoho.com/analytics", price: "Free/Paid" },
    { name: "PaveAI", category: "Marketing", subcategory: "Analytics / Insights", desc: "Converts Google Analytics data into actionable AI insights for marketing.", url: "https://www.paveai.com", price: "Paid" },

    // Ad Creatives
    { name: "AdCreative.ai", category: "Marketing", subcategory: "Ad Creatives", desc: "AI platform for generating high-converting ad creatives for various platforms.", url: "https://www.adcreative.ai", price: "Paid" },
    { name: "Designs.ai", category: "Marketing", subcategory: "Ad Creatives", desc: "AI-powered tool for creating ad visuals, videos, and branding assets.", url: "https://designs.ai", price: "Paid" },
    { name: "CopyMonkey", category: "Marketing", subcategory: "Ad Creatives", desc: "Generates AI-optimized ad copy and creatives for e-commerce campaigns.", url: "https://copymonkey.ai", price: "Paid" },
    { name: "Bannerbear", category: "Marketing", subcategory: "Ad Creatives", desc: "Automates creation of social media and display ad visuals using AI.", url: "https://www.bannerbear.com", price: "Paid" },
    { name: "Crello (VistaCreate)", category: "Marketing", subcategory: "Ad Creatives", desc: "AI-assisted graphic design tool for ads, social media, and banners.", url: "https://crello.com", price: "Free/Paid" },

    // Audience Targeting
    { name: "Facebook Ads Manager", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-powered audience targeting for social media advertising campaigns.", url: "https://www.facebook.com/business/tools/ads-manager", price: "Paid" },
    { name: "Google Ads Audience Targeting", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-assisted audience targeting and optimization for Google Ads campaigns.", url: "https://ads.google.com", price: "Paid" },
    { name: "Segment", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-driven customer data platform for precise audience segmentation.", url: "https://segment.com", price: "Paid" },
    { name: "Optimove", category: "Marketing", subcategory: "Audience Targeting", desc: "AI platform for customer segmentation, retention, and campaign personalization.", url: "https://www.optimove.com", price: "Paid" },
    { name: "Zeta Marketing Platform", category: "Marketing", subcategory: "Audience Targeting", desc: "AI-powered customer engagement and audience targeting solution.", url: "https://zetaglobal.com", price: "Paid" },

    // Trend Analysis
    { name: "BuzzSumo", category: "Marketing", subcategory: "Trend Analysis", desc: "AI-powered tool for content research and trending topics analysis.", url: "https://buzzsumo.com", price: "Paid" },
    { name: "Trendalytics", category: "Marketing", subcategory: "Trend Analysis", desc: "AI platform for tracking trends and predicting consumer behavior.", url: "https://www.trendalytics.co", price: "Paid" },
    { name: "Google Trends", category: "Marketing", subcategory: "Trend Analysis", desc: "AI-assisted tool to analyze search trends and popular topics.", url: "https://trends.google.com", price: "Free" },
    { name: "Exploding Topics", category: "Marketing", subcategory: "Trend Analysis", desc: "Discover rapidly growing trends using AI-driven insights.", url: "https://explodingtopics.com", price: "Paid" },
    { name: "Mention", category: "Marketing", subcategory: "Trend Analysis", desc: "AI-powered social listening tool for tracking trending topics and brand mentions.", url: "https://mention.com", price: "Free/Paid" },

    // Brand Monitoring
    { name: "Brand24", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-powered platform for monitoring brand mentions across the web and social media.", url: "https://brand24.com", price: "Paid" },
    { name: "Mention", category: "Marketing", subcategory: "Brand Monitoring", desc: "Tracks online mentions of your brand using AI-driven analytics.", url: "https://mention.com", price: "Free/Paid" },
    { name: "Talkwalker", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-based social listening and brand monitoring platform.", url: "https://www.talkwalker.com", price: "Paid" },
    { name: "Awario", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-powered tool for tracking brand mentions, competitors, and keywords.", url: "https://awario.com", price: "Paid" },
    { name: "Hootsuite Insights", category: "Marketing", subcategory: "Brand Monitoring", desc: "AI-enhanced platform for monitoring brand sentiment and mentions.", url: "https://hootsuite.com/products/insights", price: "Paid" },

    // Competitor Analysis
    { name: "SimilarWeb", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI-powered tool for website traffic insights and competitor benchmarking.", url: "https://www.similarweb.com", price: "Free/Paid" },
    { name: "SEMrush", category: "Marketing", subcategory: "Competitor Analysis", desc: "Comprehensive AI-driven platform for SEO, competitor analysis, and marketing insights.", url: "https://www.semrush.com", price: "Paid" },
    { name: "Ahrefs", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI-assisted tool for backlink analysis, competitor research, and SEO strategy.", url: "https://ahrefs.com", price: "Paid" },
    { name: "SpyFu", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI-based platform for analyzing competitors’ SEO and PPC campaigns.", url: "https://www.spyfu.com", price: "Paid" },
    { name: "iSpionage", category: "Marketing", subcategory: "Competitor Analysis", desc: "AI-driven competitor monitoring tool for SEO and PPC campaigns.", url: "https://www.ispionage.com", price: "Paid" },

    // Productivity / Task Automation
    { name: "Zapier", category: "Productivity", subcategory: "Task Automation", desc: "Automate workflows by connecting apps and services using AI-powered triggers and actions.", url: "https://zapier.com", price: "Free/Paid" },
    { name: "Make (formerly Integromat)", category: "Productivity", subcategory: "Task Automation", desc: "Visual platform for creating automated workflows between apps with AI enhancements.", url: "https://www.make.com", price: "Free/Paid" },
    { name: "IFTTT", category: "Productivity", subcategory: "Task Automation", desc: "Connect apps and devices to automate tasks and routines using AI rules.", url: "https://ifttt.com", price: "Free/Paid" },
    { name: "Microsoft Power Automate", category: "Productivity", subcategory: "Task Automation", desc: "AI-powered platform to automate repetitive tasks across Microsoft and third-party apps.", url: "https://flow.microsoft.com", price: "Paid" },
    { name: "n8n", category: "Productivity", subcategory: "Task Automation", desc: "Open-source workflow automation tool with AI integration for custom automations.", url: "https://n8n.io", price: "Free/Paid" },

    // Project Management AI
    { name: "ClickUp", category: "Productivity", subcategory: "Project Management AI", desc: "AI-assisted project management platform for task tracking, team collaboration, and workflow automation.", url: "https://clickup.com", price: "Free/Paid" },
    { name: "Monday.com", category: "Productivity", subcategory: "Project Management AI", desc: "AI-powered project management tool with customizable workflows and automation.", url: "https://monday.com", price: "Paid" },
    { name: "Asana", category: "Productivity", subcategory: "Project Management AI", desc: "Project management software with AI features for task prioritization and workflow optimization.", url: "https://asana.com", price: "Free/Paid" },
    { name: "Trello", category: "Productivity", subcategory: "Project Management AI", desc: "AI-enhanced Kanban-style project management tool for teams and individual projects.", url: "https://trello.com", price: "Free/Paid" },
    { name: "Wrike", category: "Productivity", subcategory: "Project Management AI", desc: "Collaborative project management platform with AI features for reporting and task automation.", url: "https://www.wrike.com", price: "Free/Paid" },

    // Document Summarization
    { name: "Smmry", category: "Productivity", subcategory: "Document Summarization", desc: "AI tool that condenses articles, papers, and documents into concise summaries.", url: "https://smmry.com", price: "Free" },
    { name: "Scholarcy", category: "Productivity", subcategory: "Document Summarization", desc: "AI-powered summarizer for research papers, reports, and long documents.", url: "https://www.scholarcy.com", price: "Free/Paid" },
    { name: "Resoomer", category: "Productivity", subcategory: "Document Summarization", desc: "Automatic summarization tool for academic and professional texts.", url: "https://resoomer.com", price: "Free" },
    { name: "QuillBot Summarizer", category: "Productivity", subcategory: "Document Summarization", desc: "AI summarization tool that shortens articles and documents while keeping key points.", url: "https://quillbot.com/summarize", price: "Free/Paid" },
    { name: "ScholarAI", category: "Productivity", subcategory: "Document Summarization", desc: "AI-driven document summarizer for research and business purposes.", url: "https://scholarai.app", price: "Paid" },

    // Note Taking AI
    { name: "Notion AI", category: "Productivity", subcategory: "Note Taking AI", desc: "AI-powered note-taking and knowledge management platform for individuals and teams.", url: "https://www.notion.so/product/ai", price: "Free/Paid" },
    { name: "Mem AI", category: "Productivity", subcategory: "Note Taking AI", desc: "Smart note-taking tool with AI to organize, summarize, and recall information.", url: "https://mem.ai", price: "Free/Paid" },
    { name: "Obsidian", category: "Productivity", subcategory: "Note Taking AI", desc: "Knowledge management tool with AI plugins for note summarization and linking.", url: "https://obsidian.md", price: "Free/Paid" },
    { name: "Roam Research", category: "Productivity", subcategory: "Note Taking AI", desc: "AI-assisted note-taking and networked thought tool for knowledge organization.", url: "https://roamresearch.com", price: "Paid" },
    { name: "Evernote AI", category: "Productivity", subcategory: "Note Taking AI", desc: "Enhanced note-taking platform using AI to summarize and organize notes efficiently.", url: "https://evernote.com", price: "Free/Paid" },

    // Calendar / Scheduling AIS
    { name: "Clockwise", category: "Productivity", subcategory: "Calendar / Scheduling AI", desc: "AI-powered calendar assistant that optimizes your schedule and finds focus time.", url: "https://www.getclockwise.com", price: "Free/Paid" },
    { name: "x.ai", category: "Productivity", subcategory: "Calendar / Scheduling AI", desc: "AI scheduling assistant that automatically coordinates meetings for you.", url: "https://x.ai", price: "Paid" },
    { name: "Reclaim.ai", category: "Productivity", subcategory: "Calendar / Scheduling AI", desc: "Automated calendar management and task prioritization using AI.", url: "https://reclaim.ai", price: "Free/Paid" },
    { name: "Microsoft Cortana", category: "Productivity", subcategory: "Calendar / Scheduling AI", desc: "AI assistant that helps schedule meetings and manage tasks within Microsoft ecosystem.", url: "https://www.microsoft.com/cortana", price: "Free/Paid" },
    { name: "Clara", category: "Productivity", subcategory: "Calendar / Scheduling AI", desc: "AI meeting scheduler that handles email-based scheduling with intelligent suggestions.", url: "https://clara.com", price: "Paid" },

    // Time Tracking
    { name: "Toggl Track", category: "Productivity", subcategory: "Time Tracking", desc: "AI-assisted time tracking tool for teams and freelancers to monitor productivity.", url: "https://toggl.com/track", price: "Free/Paid" },
    { name: "RescueTime", category: "Productivity", subcategory: "Time Tracking", desc: "Automatically tracks time spent on apps and websites and provides AI-driven insights.", url: "https://www.rescuetime.com", price: "Free/Paid" },
    { name: "Timely", category: "Productivity", subcategory: "Time Tracking", desc: "AI-powered time tracking and scheduling for individuals and teams.", url: "https://timelyapp.com", price: "Paid" },
    { name: "Hubstaff", category: "Productivity", subcategory: "Time Tracking", desc: "AI-enhanced time tracking software with screenshots, activity monitoring, and reports.", url: "https://hubstaff.com", price: "Free/Paid" },
    { name: "Everhour", category: "Productivity", subcategory: "Time Tracking", desc: "AI-integrated time tracking and project management tool for teams.", url: "https://everhour.com", price: "Paid" },

    // Workflow Optimization
    { name: "Zapier", category: "Productivity", subcategory: "Workflow Optimization", desc: "Automates workflows by connecting apps and services with AI-driven triggers and actions.", url: "https://zapier.com", price: "Free/Paid" },
    { name: "Make (formerly Integromat)", category: "Productivity", subcategory: "Workflow Optimization", desc: "Visual automation platform to optimize workflows with AI-powered integrations.", url: "https://www.make.com", price: "Free/Paid" },
    { name: "n8n", category: "Productivity", subcategory: "Workflow Optimization", desc: "Open-source workflow automation platform with AI capabilities for complex processes.", url: "https://n8n.io", price: "Free/Paid" },
    { name: "Kissflow", category: "Productivity", subcategory: "Workflow Optimization", desc: "AI-enabled workflow automation and process management tool.", url: "https://kissflow.com", price: "Paid" },
    { name: "Process Street", category: "Productivity", subcategory: "Workflow Optimization", desc: "AI-driven process management and checklist automation for teams.", url: "https://www.process.st", price: "Free/Paid" },

    // Team Collaboration
    { name: "Slack", category: "Productivity", subcategory: "Team Collaboration", desc: "AI-enhanced communication and collaboration platform for teams with integrations and workflow automation.", url: "https://slack.com", price: "Free/Paid" },
    { name: "Microsoft Teams", category: "Productivity", subcategory: "Team Collaboration", desc: "AI-assisted chat, video, and collaboration platform integrated with Microsoft 365.", url: "https://www.microsoft.com/microsoft-teams", price: "Free/Paid" },
    { name: "Asana", category: "Productivity", subcategory: "Team Collaboration", desc: "AI-enabled project management and team collaboration tool to streamline work.", url: "https://asana.com", price: "Free/Paid" },
    { name: "Trello", category: "Productivity", subcategory: "Team Collaboration", desc: "Visual project management with AI automation for team workflows.", url: "https://trello.com", price: "Free/Paid" },
    { name: "ClickUp", category: "Productivity", subcategory: "Team Collaboration", desc: "All-in-one productivity platform with AI features for task management and collaboration.", url: "https://clickup.com", price: "Free/Paid" },

    // AI Assistants
    { name: "Notion AI", category: "Productivity", subcategory: "AI Assistants", desc: "AI-powered assistant integrated with Notion for notes, summaries, and task management.", url: "https://www.notion.so/product/ai", price: "Free/Paid" },
    { name: "Otter.ai", category: "Productivity", subcategory: "AI Assistants", desc: "AI transcription and meeting assistant for taking notes and summarizing conversations.", url: "https://otter.ai", price: "Free/Paid" },
    { name: "Mem", category: "Productivity", subcategory: "AI Assistants", desc: "AI note-taking assistant that organizes information and creates smart summaries.", url: "https://mem.ai", price: "Free/Paid" },
    { name: "Fellow", category: "Productivity", subcategory: "AI Assistants", desc: "AI assistant for meeting agendas, notes, and team collaboration.", url: "https://fellow.app", price: "Free/Paid" },
    { name: "Fireflies.ai", category: "Productivity", subcategory: "AI Assistants", desc: "AI meeting assistant that records, transcribes, and summarizes calls.", url: "https://fireflies.ai", price: "Free/Paid" },

    // Share Market 

    { name: "TradingView", category: "ShareMarket", subcategory: "Stock Analysis", desc: "Advanced charting and AI-powered analysis platform for traders.", url: "https://www.tradingview.com", price: "Free/Paid" },
    { name: "TrendSpider", category: "ShareMarket", subcategory: "Stock Analysis", desc: "AI technical analysis tool that automates charting and pattern recognition.", url: "https://www.trendspider.com", price: "Paid" },
    { name: "Tickeron", category: "ShareMarket", subcategory: "Stock Analysis", desc: "AI-driven stock forecasts, pattern recognition, and portfolio tools.", url: "https://www.tickeron.com", price: "Free/Paid" },
    { name: "FinChat", category: "ShareMarket", subcategory: "Stock Analysis", desc: "AI-powered financial data assistant for equity and company insights.", url: "https://finchat.io", price: "Free" },
    { name: "StockGPT", category: "ShareMarket", subcategory: "Stock Analysis", desc: "ChatGPT-based AI for stock research, news summaries, and market sentiment.", url: "https://stockgpt.ai", price: "Free/Paid" },

    // Portfolio Management
    { name: "Wealthfront", category: "ShareMarket", subcategory: "Portfolio Management", desc: "Automated investment service using AI to manage and optimize portfolios.", url: "https://www.wealthfront.com", price: "Paid" },
    { name: "Betterment", category: "ShareMarket", subcategory: "Portfolio Management", desc: "AI-driven robo-advisor for personalized portfolio management and goal tracking.", url: "https://www.betterment.com", price: "Paid" },
    { name: "SigFig", category: "ShareMarket", subcategory: "Portfolio Management", desc: "Smart portfolio tracking and management tool using AI and analytics.", url: "https://www.sigfig.com", price: "Free/Paid" },
    { name: "Qplum", category: "ShareMarket", subcategory: "Portfolio Management", desc: "AI-powered investment platform offering automated trading and portfolio balancing.", url: "https://www.qplum.com", price: "Paid" },
    { name: "Magnifi", category: "ShareMarket", subcategory: "Portfolio Management", desc: "Conversational AI investing assistant that helps build and manage portfolios.", url: "https://magnifi.com", price: "Free/Paid" },


    // Market Prediction AI Tools
    { name: "TradingView", category: "ShareMarket", subcategory: "Market Prediction", desc: "Advanced charting and AI-powered analysis platform for predicting market trends.", url: "https://www.tradingview.com", price: "Free/Paid" },
    { name: "Tickeron", category: "ShareMarket", subcategory: "Market Prediction", desc: "AI platform offering real-time trading signals and market predictions.", url: "https://tickeron.com", price: "Free/Paid" },
    { name: "TrendSpider", category: "ShareMarket", subcategory: "Market Prediction", desc: "AI-driven tool for automated trendline detection and market forecasting.", url: "https://www.trendspider.com", price: "Paid" },
    { name: "Kavout", category: "ShareMarket", subcategory: "Market Prediction", desc: "AI-powered platform predicting stock rankings and market movements.", url: "https://www.kavout.com", price: "Paid" },
    { name: "FinBrain", category: "ShareMarket", subcategory: "Market Prediction", desc: "AI predicts stock and crypto trends using advanced pattern recognition.", url: "https://finbrain.tech", price: "Free/Paid" },


    { name: "Zignaly", category: "ShareMarket", subcategory: "Trading Signals", desc: "AI-driven trading signal platform for cryptocurrencies and stocks.", url: "https://zignaly.com", price: "Free/Paid" },
    { name: "CryptoHopper", category: "ShareMarket", subcategory: "Trading Signals", desc: "Automated trading bot providing AI-powered buy/sell signals.", url: "https://www.cryptohopper.com", price: "Paid" },
    { name: "Signals Blue", category: "ShareMarket", subcategory: "Trading Signals", desc: "AI platform delivering real-time trading alerts for multiple markets.", url: "https://signalsblue.com", price: "Paid" },
    { name: "3Commas", category: "ShareMarket", subcategory: "Trading Signals", desc: "AI-assisted trading bot offering market signals and portfolio management.", url: "https://3commas.io", price: "Free/Paid" },
    { name: "CoinSignals", category: "ShareMarket", subcategory: "Trading Signals", desc: "AI-powered cryptocurrency trading signals platform.", url: "https://coinsignals.trade", price: "Paid" },


    // News Aggregation AI Tools
    { name: "Sentifi", category: "ShareMarket", subcategory: "News Aggregation", desc: "AI platform analyzing news and social media to provide market insights.", url: "https://www.sentifi.com", price: "Paid" },
    { name: "AlphaSense", category: "ShareMarket", subcategory: "News Aggregation", desc: "AI-powered search engine aggregating financial news and market research.", url: "https://www.alpha-sense.com", price: "Paid" },
    { name: "Accern", category: "ShareMarket", subcategory: "News Aggregation", desc: "AI tool providing real-time market alerts and news analysis.", url: "https://www.accern.com", price: "Paid" },
    { name: "NewsQuant", category: "ShareMarket", subcategory: "News Aggregation", desc: "AI-driven platform analyzing news to predict stock market trends.", url: "https://www.newsquant.com", price: "Paid" },
    { name: "MarketNewsAI", category: "ShareMarket", subcategory: "News Aggregation", desc: "Aggregates financial news and uses AI to generate actionable trading insights.", url: "https://www.marketnewsai.com", price: "Paid" },


    // Technical Analysis AI Tools
    { name: "TrendSpider", category: "ShareMarket", subcategory: "Technical Analysis", desc: "AI-driven charting software with automated trendline detection and backtesting.", url: "https://www.trendspider.com", price: "Paid" },
    { name: "TradingView", category: "ShareMarket", subcategory: "Technical Analysis", desc: "Advanced charting platform with AI-powered technical indicators and alerts.", url: "https://www.tradingview.com", price: "Free/Paid" },
    { name: "Kavout", category: "ShareMarket", subcategory: "Technical Analysis", desc: "AI platform providing stock rankings and technical pattern predictions.", url: "https://www.kavout.com", price: "Paid" },
    { name: "MetaStock", category: "ShareMarket", subcategory: "Technical Analysis", desc: "AI-assisted technical analysis software for stocks, forex, and futures.", url: "https://www.metastock.com", price: "Paid" },
    { name: "TradeIdeas", category: "ShareMarket", subcategory: "Technical Analysis", desc: "AI-powered market scanner for identifying trading opportunities and technical setups.", url: "https://www.trade-ideas.com", price: "Paid" },


    // Sentiment Analysis AI Tools
    { name: "Sentifi", category: "ShareMarket", subcategory: "Sentiment Analysis", desc: "AI platform analyzing news, social media, and blogs to gauge market sentiment.", url: "https://www.sentifi.com", price: "Paid" },
    { name: "Accern", category: "ShareMarket", subcategory: "Sentiment Analysis", desc: "AI tool providing real-time sentiment insights to inform trading decisions.", url: "https://www.accern.com", price: "Paid" },
    { name: "MarketPsych Data", category: "ShareMarket", subcategory: "Sentiment Analysis", desc: "AI-driven sentiment analytics platform using news and social media data.", url: "https://www.marketpsychdata.com", price: "Paid" },
    { name: "FinSentS", category: "ShareMarket", subcategory: "Sentiment Analysis", desc: "AI platform that quantifies market sentiment to predict stock price movements.", url: "https://www.finsents.com", price: "Paid" },
    { name: "Social Market Analytics", category: "ShareMarket", subcategory: "Sentiment Analysis", desc: "AI tool analyzing social media and news to derive market sentiment scores.", url: "https://www.socialmarketanalytics.com", price: "Paid" },


    // Algorithmic Trading AI Tools
    { name: "Alpaca", category: "ShareMarket", subcategory: "Algorithmic Trading", desc: "AI-driven platform for automated trading and portfolio management.", url: "https://alpaca.markets", price: "Free/Paid" },
    { name: "QuantConnect", category: "ShareMarket", subcategory: "Algorithmic Trading", desc: "Cloud-based algorithmic trading platform with AI-powered backtesting and strategy development.", url: "https://www.quantconnect.com", price: "Free/Paid" },
    { name: "Numerai", category: "ShareMarket", subcategory: "Algorithmic Trading", desc: "Crowdsourced AI hedge fund leveraging predictive models for algorithmic trading.", url: "https://numer.ai", price: "Free/Paid" },
    { name: "Kavout", category: "ShareMarket", subcategory: "Algorithmic Trading", desc: "AI platform providing predictive analytics and automated trading strategies.", url: "https://www.kavout.com", price: "Paid" },
    { name: "MetaTrader 5 (AI Bots)", category: "ShareMarket", subcategory: "Algorithmic Trading", desc: "Trading platform supporting AI-powered bots for fully automated strategies.", url: "https://www.metatrader5.com", price: "Free/Paid" },


    // Stock Screening AI Tools
    { name: "Finviz Elite", category: "ShareMarket", subcategory: "Stock Screening", desc: "AI-powered stock screener with filters, charts, and market heatmaps.", url: "https://finviz.com", price: "Paid" },
    { name: "TradingView Screener", category: "ShareMarket", subcategory: "Stock Screening", desc: "Real-time stock screener with AI-assisted technical and fundamental filters.", url: "https://www.tradingview.com/screener", price: "Free/Paid" },
    { name: "Zacks Stock Screener", category: "ShareMarket", subcategory: "Stock Screening", desc: "AI-enhanced screener analyzing fundamentals, earnings, and trends.", url: "https://www.zacks.com/screening/stock-screener", price: "Free/Paid" },
    { name: "TrendSpider Screener", category: "ShareMarket", subcategory: "Stock Screening", desc: "AI-driven screener integrating technical analysis and pattern recognition.", url: "https://www.trendspider.com", price: "Paid" },
    { name: "Kavout Kai", category: "ShareMarket", subcategory: "Stock Screening", desc: "AI platform providing stock rankings and screening based on predictive analytics.", url: "https://www.kavout.com", price: "Paid" },


    // Investment Insights AI Tools
    { name: "Morningstar Direct", category: "ShareMarket", subcategory: "Investment Insights", desc: "AI-powered platform providing investment research, analytics, and insights for portfolio decisions.", url: "https://www.morningstar.com/products/direct", price: "Paid" },
    { name: "TipRanks", category: "ShareMarket", subcategory: "Investment Insights", desc: "AI tool aggregating analyst ratings, insider trading, and market data to deliver actionable insights.", url: "https://www.tipranks.com", price: "Free/Paid" },
    { name: "Motley Fool Stock Advisor", category: "ShareMarket", subcategory: "Investment Insights", desc: "AI-assisted stock recommendation platform providing insights and market analysis.", url: "https://www.fool.com", price: "Paid" },
    { name: "Yewno|Edge", category: "ShareMarket", subcategory: "Investment Insights", desc: "AI platform analyzing global financial data to deliver investment insights and forecasts.", url: "https://www.yewno.com/edge", price: "Paid" },
    { name: "Sentieo", category: "ShareMarket", subcategory: "Investment Insights", desc: "AI-powered financial research platform providing investment insights and document analytics.", url: "https://sentieo.com", price: "Paid" },


    // Health Diagnostics AI Tools
    { name: "IBM Watson Health", category: "Health", subcategory: "Diagnostics", desc: "AI-powered platform assisting in medical diagnosis and clinical decision support.", url: "https://www.ibm.com/watson-health", price: "Paid" },
    { name: "PathAI", category: "Health", subcategory: "Diagnostics", desc: "AI platform improving pathology diagnosis accuracy using deep learning algorithms.", url: "https://www.pathai.com", price: "Paid" },
    { name: "Aidoc", category: "Health", subcategory: "Diagnostics", desc: "AI solution for radiology that detects abnormalities in medical imaging.", url: "https://www.aidoc.com", price: "Paid" },
    { name: "Butterfly Network", category: "Health", subcategory: "Diagnostics", desc: "AI-powered handheld ultrasound device for rapid medical imaging diagnostics.", url: "https://www.butterflynetwork.com", price: "Paid" },
    { name: "Tempus", category: "Health", subcategory: "Diagnostics", desc: "AI-driven platform providing molecular diagnostics and precision medicine insights.", url: "https://www.tempus.com", price: "Paid" },


    // Health Fitness Tracking AI Tools
    { name: "WHOOP", category: "Health", subcategory: "Fitness Tracking", desc: "AI-powered wearable tracking recovery, strain, and sleep for optimal performance.", url: "https://www.whoop.com", price: "Paid" },
    { name: "Fitbit Premium", category: "Health", subcategory: "Fitness Tracking", desc: "AI-driven fitness insights, personalized guidance, and activity tracking.", url: "https://www.fitbit.com/premium", price: "Free/Paid" },
    { name: "Garmin Connect", category: "Health", subcategory: "Fitness Tracking", desc: "AI analytics for wearable fitness data, heart rate, and performance metrics.", url: "https://connect.garmin.com", price: "Free/Paid" },
    { name: "MyFitnessPal", category: "Health", subcategory: "Fitness Tracking", desc: "AI-powered app for tracking workouts, nutrition, and health goals.", url: "https://www.myfitnesspal.com", price: "Free/Paid" },
    { name: "Strava", category: "Health", subcategory: "Fitness Tracking", desc: "AI-based performance analytics for running and cycling activities.", url: "https://www.strava.com", price: "Free/Paid" },


    // Health Telemedicine AI Tools
    { name: "Teladoc Health", category: "Health", subcategory: "Telemedicine", desc: "AI-powered telehealth platform for virtual consultations and diagnosis.", url: "https://www.teladochealth.com", price: "Paid" },
    { name: "Amwell", category: "Health", subcategory: "Telemedicine", desc: "AI-enhanced telemedicine service connecting patients with doctors remotely.", url: "https://www.amwell.com", price: "Paid" },
    { name: "MDLIVE", category: "Health", subcategory: "Telemedicine", desc: "Telehealth platform using AI for virtual care and symptom triage.", url: "https://www.mdlive.com", price: "Paid" },
    { name: "Doctor on Demand", category: "Health", subcategory: "Telemedicine", desc: "AI-assisted virtual healthcare for urgent care, mental health, and chronic conditions.", url: "https://www.doctorondemand.com", price: "Paid" },
    { name: "Babylon Health", category: "Health", subcategory: "Telemedicine", desc: "AI-driven telehealth app offering virtual consultations and symptom checking.", url: "https://www.babylonhealth.com", price: "Free/Paid" },


    // Health Mental Health AI Tools
    { name: "Woebot", category: "Health", subcategory: "Mental Health", desc: "AI chatbot providing cognitive behavioral therapy and mental health support.", url: "https://woebothealth.com", price: "Free/Paid" },
    { name: "Wysa", category: "Health", subcategory: "Mental Health", desc: "AI-driven mental health chatbot offering emotional support and therapy guidance.", url: "https://www.wysa.io", price: "Free/Paid" },
    { name: "Youper", category: "Health", subcategory: "Mental Health", desc: "AI-powered emotional health assistant for mood tracking and therapy.", url: "https://www.youper.ai", price: "Free/Paid" },
    { name: "Ginger", category: "Health", subcategory: "Mental Health", desc: "AI platform combining coaching, therapy, and psychiatry support.", url: "https://www.ginger.com", price: "Paid" },
    { name: "Mindstrong", category: "Health", subcategory: "Mental Health", desc: "AI-based mental health platform using digital biomarkers for monitoring.", url: "https://mindstrong.com", price: "Paid" },


    // Health Drug Discovery AI Tools
    { name: "Insilico Medicine", category: "Health", subcategory: "Drug Discovery", desc: "AI platform for drug discovery, biomarker development, and clinical trials.", url: "https://insilico.com", price: "Paid" },
    { name: "Atomwise", category: "Health", subcategory: "Drug Discovery", desc: "AI-driven platform for predicting drug efficacy and molecular interactions.", url: "https://www.atomwise.com", price: "Paid" },
    { name: "BenevolentAI", category: "Health", subcategory: "Drug Discovery", desc: "AI-powered drug discovery platform analyzing biomedical data for new therapies.", url: "https://www.benevolent.com", price: "Paid" },
    { name: "Exscientia", category: "Health", subcategory: "Drug Discovery", desc: "AI platform optimizing drug design and discovery processes.", url: "https://www.exscientia.ai", price: "Paid" },
    { name: "Recursion Pharmaceuticals", category: "Health", subcategory: "Drug Discovery", desc: "AI-driven drug discovery using cellular imaging and machine learning.", url: "https://www.recursion.com", price: "Paid" },


    // Health Nutrition AI Tools
    { name: "Nutrino", category: "Health", subcategory: "Nutrition", desc: "AI-powered nutrition platform providing personalized meal recommendations.", url: "https://www.nutrino.co", price: "Paid" },
    { name: "Suggestic", category: "Health", subcategory: "Nutrition", desc: "AI-driven app for personalized nutrition guidance and meal planning.", url: "https://www.suggestic.com", price: "Paid" },
    { name: "Bitesnap", category: "Health", subcategory: "Nutrition", desc: "AI app that tracks meals and provides nutrition insights using photo recognition.", url: "https://www.bitesnap.com", price: "Free/Paid" },
    { name: "Foodvisor", category: "Health", subcategory: "Nutrition", desc: "AI-powered nutrition tracker analyzing meals and providing dietary recommendations.", url: "https://www.foodvisor.io", price: "Free/Paid" },
    { name: "Lifesum", category: "Health", subcategory: "Nutrition", desc: "AI app for personalized nutrition advice, meal tracking, and health goals.", url: "https://www.lifesum.com", price: "Free/Paid" },


    // Health Medical Imaging AI Tools
    { name: "Aidoc", category: "Health", subcategory: "Medical Imaging", desc: "AI platform for analyzing medical images and detecting abnormalities.", url: "https://www.aidoc.com", price: "Paid" },
    { name: "Zebra Medical Vision", category: "Health", subcategory: "Medical Imaging", desc: "AI-powered medical imaging analytics for radiology and diagnosis.", url: "https://www.zebra-med.com", price: "Paid" },
    { name: "Arterys", category: "Health", subcategory: "Medical Imaging", desc: "AI platform for cloud-based medical image analysis in cardiology and oncology.", url: "https://www.arterys.com", price: "Paid" },
    { name: "Qure.ai", category: "Health", subcategory: "Medical Imaging", desc: "AI for radiology imaging interpretation, detecting abnormalities in X-rays and CT scans.", url: "https://www.qure.ai", price: "Paid" },
    { name: "RadNet AI", category: "Health", subcategory: "Medical Imaging", desc: "AI-based radiology platform providing automated imaging analysis and reporting.", url: "https://www.radnet.com", price: "Paid" },


    // Health Wearables AI Tools
    { name: "Apple Watch", category: "Health", subcategory: "Wearables", desc: "AI-powered wearable tracking heart rate, activity, and health metrics.", url: "https://www.apple.com/watch", price: "Paid" },
    { name: "Fitbit", category: "Health", subcategory: "Wearables", desc: "AI wearable tracking fitness, sleep, and overall health metrics.", url: "https://www.fitbit.com", price: "Free/Paid" },
    { name: "Whoop", category: "Health", subcategory: "Wearables", desc: "AI wearable monitoring recovery, strain, and sleep performance.", url: "https://www.whoop.com", price: "Paid" },
    { name: "Garmin Wearables", category: "Health", subcategory: "Wearables", desc: "AI-powered devices for health, fitness, and activity tracking.", url: "https://www.garmin.com", price: "Paid" },
    { name: "Oura Ring", category: "Health", subcategory: "Wearables", desc: "AI-driven wearable tracking sleep, recovery, and readiness metrics.", url: "https://ouraring.com", price: "Paid" },


    // Health Symptom Checkers AI Tools
    { name: "Ada Health", category: "Health", subcategory: "Symptom Checkers", desc: "AI-powered symptom assessment and health guidance platform.", url: "https://ada.com", price: "Free/Paid" },
    { name: "Buoy Health", category: "Health", subcategory: "Symptom Checkers", desc: "AI chatbot helping patients assess symptoms and recommend next steps.", url: "https://www.buoyhealth.com", price: "Free/Paid" },
    { name: "Your.MD", category: "Health", subcategory: "Symptom Checkers", desc: "AI-driven digital health platform providing symptom checking and guidance.", url: "https://www.your.md", price: "Free/Paid" },
    { name: "Infermedica", category: "Health", subcategory: "Symptom Checkers", desc: "AI platform for preliminary diagnosis and symptom triage.", url: "https://infermedica.com", price: "Paid" },
    { name: "Sensely", category: "Health", subcategory: "Symptom Checkers", desc: "AI virtual nurse platform for symptom checking and patient guidance.", url: "https://www.sensely.com", price: "Paid" },


    // Health Analytics AI Tools
    { name: "IBM Watson Health Analytics", category: "Health", subcategory: "Health Analytics", desc: "AI platform providing clinical and operational analytics for healthcare providers.", url: "https://www.ibm.com/watson-health", price: "Paid" },
    { name: "Health Catalyst", category: "Health", subcategory: "Health Analytics", desc: "AI-driven healthcare analytics platform optimizing patient outcomes and operations.", url: "https://www.healthcatalyst.com", price: "Paid" },
    { name: "Tempus Analytics", category: "Health", subcategory: "Health Analytics", desc: "AI platform analyzing clinical and molecular data for precision medicine insights.", url: "https://www.tempus.com", price: "Paid" },
    { name: "SAS Health Analytics", category: "Health", subcategory: "Health Analytics", desc: "AI-powered analytics platform for population health, risk prediction, and outcomes.", url: "https://www.sas.com/health", price: "Paid" },
    { name: "Qventus", category: "Health", subcategory: "Health Analytics", desc: "AI-driven platform for real-time operational analytics in hospitals and healthcare systems.", url: "https://www.qventus.com", price: "Paid" },


    // Gaming AI Game Characters Tools
    { name: "Promethean AI", category: "Gaming", subcategory: "AI Game Characters", desc: "AI platform for creating intelligent NPC behaviors in games.", url: "https://www.prometheanai.com", price: "Paid" },
    { name: "Charisma.ai", category: "Gaming", subcategory: "AI Game Characters", desc: "AI-driven interactive characters for games and storytelling.", url: "https://www.charisma.ai", price: "Paid" },
    { name: "Spirit AI", category: "Gaming", subcategory: "AI Game Characters", desc: "AI platform for dynamic NPC dialogue and behavior.", url: "https://www.spiritai.com", price: "Paid" },
    { name: "Inworld AI", category: "Gaming", subcategory: "AI Game Characters", desc: "Generative AI for creating realistic in-game characters and interactions.", url: "https://www.inworld.ai", price: "Paid" },
    { name: "Botpress", category: "Gaming", subcategory: "AI Game Characters", desc: "AI framework for building NPC chat and character-driven AI experiences.", url: "https://botpress.com", price: "Free/Paid" },


    // Gaming Procedural Level Generation Tools
    { name: "Promethean AI", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI tool for generating game environments and levels procedurally.", url: "https://www.prometheanai.com", price: "Paid" },
    { name: "Houdini Engine", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI-powered procedural generation for game assets and levels.", url: "https://www.sidefx.com", price: "Paid" },
    { name: "Unity ML-Agents", category: "Gaming", subcategory: "Procedural Level Generation", desc: "Machine learning toolkit for AI-driven procedural content creation.", url: "https://unity.com/products/machine-learning-agents", price: "Free/Paid" },
    { name: "Voxel Farm", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI procedural terrain and voxel-based level generation platform.", url: "https://www.voxelfarm.com", price: "Paid" },
    { name: "Tiled AI", category: "Gaming", subcategory: "Procedural Level Generation", desc: "AI tool for automatic level layout and map generation.", url: "https://www.mapeditor.org", price: "Free/Paid" },


    // Gaming Game Story AI Tools
    { name: "AI Dungeon", category: "Gaming", subcategory: "Game Story", desc: "AI-powered platform for generating dynamic game narratives and stories.", url: "https://play.aidungeon.io", price: "Free/Paid" },
    { name: "Charisma.ai", category: "Gaming", subcategory: "Game Story", desc: "AI storytelling engine for creating branching narratives and dialogue.", url: "https://www.charisma.ai", price: "Paid" },
    { name: "Inworld AI", category: "Gaming", subcategory: "Game Story", desc: "Generative AI for interactive storytelling and character-driven plots.", url: "https://www.inworld.ai", price: "Paid" },
    { name: "Latitude.io", category: "Gaming", subcategory: "Game Story", desc: "AI platform for procedurally generated game stories and campaigns.", url: "https://latitude.io", price: "Paid" },
    { name: "Plotagon", category: "Gaming", subcategory: "Game Story", desc: "AI-powered tool for creating interactive story-driven games.", url: "https://www.plotagon.com", price: "Free/Paid" },


    // Gaming AI Game Testing Tools
    { name: "GameDriver", category: "Gaming", subcategory: "AI Game Testing", desc: "AI-assisted automated game testing platform for QA and bug detection.", url: "https://www.gamedriver.io", price: "Paid" },
    { name: "Applitools", category: "Gaming", subcategory: "AI Game Testing", desc: "Visual AI testing platform for games and interactive applications.", url: "https://applitools.com", price: "Paid" },
    { name: "Mabl", category: "Gaming", subcategory: "AI Game Testing", desc: "AI-driven automated testing tool for game UI and functionality.", url: "https://www.mabl.com", price: "Paid" },
    { name: "Test.ai", category: "Gaming", subcategory: "AI Game Testing", desc: "AI platform for automating mobile and desktop game testing.", url: "https://test.ai", price: "Paid" },
    { name: "Rainforest QA", category: "Gaming", subcategory: "AI Game Testing", desc: "AI-powered QA automation for game workflows and testing scenarios.", url: "https://www.rainforestqa.com", price: "Paid" },


    // Gaming Game Asset Creation AI Tools
    { name: "Promethean AI", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI tool for creating 3D game assets and environments.", url: "https://www.prometheanai.com", price: "Paid" },
    { name: "Runway ML", category: "Gaming", subcategory: "Game Asset Creation", desc: "Generative AI for creating textures, sprites, and game visuals.", url: "https://runwayml.com", price: "Free/Paid" },
    { name: "Kaedim3D", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI platform converting 2D art into 3D game assets.", url: "https://www.kaedim3d.com", price: "Paid" },
    { name: "NVIDIA Omniverse", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI-powered platform for collaborative 3D content creation.", url: "https://www.nvidia.com/en-us/omniverse", price: "Free/Paid" },
    { name: "Artbreeder", category: "Gaming", subcategory: "Game Asset Creation", desc: "AI tool for generating characters, landscapes, and game visuals.", url: "https://www.artbreeder.com", price: "Free/Paid" },


    // Gaming AI Game Balancing Tools
    { name: "Latitude.io", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI platform for automatically adjusting game difficulty and balance.", url: "https://latitude.io", price: "Paid" },
    { name: "Colossal-AI", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI-assisted tool for balancing gameplay mechanics and player progression.", url: "https://www.colossalai.com", price: "Free/Paid" },
    { name: "Promethean AI", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI-driven platform for dynamically balancing in-game challenges and mechanics.", url: "https://www.prometheanai.com", price: "Paid" },
    { name: "DeepMotion", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI for analyzing player behavior and optimizing gameplay balance.", url: "https://www.deepmotion.com", price: "Paid" },
    { name: "GameAnalytics", category: "Gaming", subcategory: "AI Game Balancing", desc: "AI-powered analytics platform helping developers balance game progression.", url: "https://gameanalytics.com", price: "Free/Paid" },


    // Gaming Voice / Dialogue Generation AI Tools
    { name: "Replica Studios", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI platform for generating realistic voice acting for game characters.", url: "https://replicastudios.com", price: "Paid" },
    { name: "Respeecher", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI voice cloning and dialogue generation for games and media.", url: "https://www.respeecher.com", price: "Paid" },
    { name: "Altered Studio", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI voice generation platform for characters and interactive storytelling.", url: "https://www.altered.ai", price: "Paid" },
    { name: "Inworld AI", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI creating interactive characters with realistic dialogue and voice.", url: "https://www.inworld.ai", price: "Paid" },
    { name: "Speechify", category: "Gaming", subcategory: "Voice / Dialogue Generation", desc: "AI-driven text-to-speech tool for generating character dialogues.", url: "https://speechify.com", price: "Free/Paid" },


    // Gaming Animation AI Tools
    { name: "DeepMotion", category: "Gaming", subcategory: "Animation AI", desc: "AI-powered motion capture and character animation for games.", url: "https://www.deepmotion.com", price: "Paid" },
    { name: "Cascadeur", category: "Gaming", subcategory: "Animation AI", desc: "AI-assisted software for keyframe animation and realistic movement.", url: "https://cascadeur.com", price: "Free/Paid" },
    { name: "RADiCAL", category: "Gaming", subcategory: "Animation AI", desc: "AI-driven motion capture and animation platform for game developers.", url: "https://www.getrad.co", price: "Paid" },
    { name: "Plask", category: "Gaming", subcategory: "Animation AI", desc: "AI motion capture and animation editing software for character movements.", url: "https://plask.ai", price: "Free/Paid" },
    { name: "Move.ai", category: "Gaming", subcategory: "Animation AI", desc: "AI platform converting video into 3D character animations.", url: "https://www.move.ai", price: "Paid" },


    // Gaming AI Game Analytics Tools
    { name: "GameAnalytics", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI platform providing insights on player behavior and game performance.", url: "https://gameanalytics.com", price: "Free/Paid" },
    { name: "DeltaDNA", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI-driven analytics for player engagement, retention, and monetization.", url: "https://deltadna.com", price: "Paid" },
    { name: "Unity Analytics", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI-powered analytics integrated with Unity for tracking game metrics.", url: "https://unity.com/products/unity-analytics", price: "Free/Paid" },
    { name: "Kochava", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI analytics platform for mobile game user behavior and monetization.", url: "https://www.kochava.com", price: "Paid" },
    { name: "Amplitude", category: "Gaming", subcategory: "AI Game Analytics", desc: "AI-powered product and game analytics for understanding player actions.", url: "https://amplitude.com", price: "Free/Paid" },


    // Gaming Cheat Detection / Anti-Cheat AI Tools
    { name: "BattlEye", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-powered anti-cheat system used in online multiplayer games.", url: "https://www.battleye.com", price: "Paid" },
    { name: "Easy Anti-Cheat", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-based cheat prevention platform integrated into games.", url: "https://www.easy.ac", price: "Paid" },
    { name: "PunkBuster", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-assisted software preventing cheating in multiplayer games.", url: "https://punkbuster.com", price: "Paid" },
    { name: "FairFight", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-driven server-side anti-cheat system monitoring player behavior.", url: "https://www.ea.com/fairfight", price: "Paid" },
    { name: "Vanguard (Riot Games)", category: "Gaming", subcategory: "Cheat Detection / Anti-Cheat AI", desc: "AI-enhanced anti-cheat platform used in competitive esports games.", url: "https://playvalorant.com", price: "Free/Paid" },

    // Networking Network Monitoring AI Tools
    { name: "Paessler PRTG", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-powered network monitoring for performance, traffic, and uptime.", url: "https://www.paessler.com/prtg", price: "Paid" },
    { name: "SolarWinds NPM", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-assisted network performance monitoring and alerting platform.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },
    { name: "Datadog Network Monitoring", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-driven monitoring of network traffic, devices, and applications.", url: "https://www.datadoghq.com/network-monitoring", price: "Paid" },
    { name: "Zabbix", category: "Networking", subcategory: "Network Monitoring AI", desc: "Open-source AI-enabled network and infrastructure monitoring tool.", url: "https://www.zabbix.com", price: "Free/Paid" },
    { name: "LogicMonitor", category: "Networking", subcategory: "Network Monitoring AI", desc: "AI-powered platform for proactive network and infrastructure monitoring.", url: "https://www.logicmonitor.com", price: "Paid" },


    // Networking Traffic Analysis AI Tools
    { name: "Cisco Stealthwatch", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-driven network traffic analysis and threat detection.", url: "https://www.cisco.com/c/en/us/products/security/stealthwatch", price: "Paid" },
    { name: "NetFlow Analyzer", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-assisted network traffic analytics and bandwidth monitoring.", url: "https://www.manageengine.com/products/netflow/", price: "Paid" },
    { name: "Darktrace Network", category: "Networking", subcategory: "Traffic Analysis", desc: "AI cybersecurity platform analyzing network traffic for anomalies.", url: "https://www.darktrace.com", price: "Paid" },
    { name: "Paessler PRTG", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-powered traffic monitoring and network bandwidth analysis.", url: "https://www.paessler.com/prtg", price: "Paid" },
    { name: "Wireshark AI Plugins", category: "Networking", subcategory: "Traffic Analysis", desc: "AI-assisted packet and traffic analysis for advanced network monitoring.", url: "https://www.wireshark.org", price: "Free" },


    // Networking Threat Detection AI Tools
    { name: "Darktrace", category: "Networking", subcategory: "Threat Detection", desc: "AI cybersecurity platform detecting advanced threats in real-time.", url: "https://www.darktrace.com", price: "Paid" },
    { name: "Vectra AI", category: "Networking", subcategory: "Threat Detection", desc: "AI platform for detecting and responding to network security threats.", url: "https://www.vectra.ai", price: "Paid" },
    { name: "CrowdStrike Falcon", category: "Networking", subcategory: "Threat Detection", desc: "AI-powered endpoint and network threat detection platform.", url: "https://www.crowdstrike.com", price: "Paid" },
    { name: "Cisco Secure Network Analytics", category: "Networking", subcategory: "Threat Detection", desc: "AI-enabled solution for identifying and mitigating network threats.", url: "https://www.cisco.com/c/en/us/products/security/secure-network-analytics", price: "Paid" },
    { name: "Fortinet FortiAI", category: "Networking", subcategory: "Threat Detection", desc: "AI cybersecurity solution for automated threat detection and response.", url: "https://www.fortinet.com", price: "Paid" },


    // Networking Performance Optimization AI Tools
    { name: "Cisco DNA Center", category: "Networking", subcategory: "Performance Optimization", desc: "AI-driven platform for network performance optimization and automation.", url: "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center", price: "Paid" },
    { name: "Juniper Mist AI", category: "Networking", subcategory: "Performance Optimization", desc: "AI platform optimizing Wi-Fi performance and network operations.", url: "https://www.juniper.net/us/en/products-services/wireless/mist-ai", price: "Paid" },
    { name: "NetBrain", category: "Networking", subcategory: "Performance Optimization", desc: "AI network automation platform for performance and issue resolution.", url: "https://www.netbraintech.com", price: "Paid" },
    { name: "AppNeta", category: "Networking", subcategory: "Performance Optimization", desc: "AI-powered network and application performance monitoring and optimization.", url: "https://www.appneta.com", price: "Paid" },
    { name: "SolarWinds NPM", category: "Networking", subcategory: "Performance Optimization", desc: "AI-assisted platform for optimizing network performance and uptime.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },


    // Networking Network Automation AI Tools
    { name: "Cisco DNA Center", category: "Networking", subcategory: "Network Automation", desc: "AI platform automating network provisioning, management, and policies.", url: "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center", price: "Paid" },
    { name: "Juniper Mist AI", category: "Networking", subcategory: "Network Automation", desc: "AI-driven network automation for Wi-Fi, LAN, and WAN management.", url: "https://www.juniper.net/us/en/products-services/wireless/mist-ai", price: "Paid" },
    { name: "NetBrain", category: "Networking", subcategory: "Network Automation", desc: "AI platform automating network workflows and diagnostics.", url: "https://www.netbraintech.com", price: "Paid" },
    { name: "Ansible by Red Hat", category: "Networking", subcategory: "Network Automation", desc: "AI-assisted automation platform for network configuration and management.", url: "https://www.ansible.com", price: "Free/Paid" },
    { name: "StackStorm", category: "Networking", subcategory: "Network Automation", desc: "Open-source AI-driven automation platform for IT and network operations.", url: "https://stackstorm.com", price: "Free/Paid" },


    // Networking Anomaly Detection AI Tools
    { name: "Darktrace", category: "Networking", subcategory: "Anomaly Detection", desc: "AI platform detecting network anomalies and unusual behavior in real time.", url: "https://www.darktrace.com", price: "Paid" },
    { name: "Vectra AI", category: "Networking", subcategory: "Anomaly Detection", desc: "AI-driven detection of abnormal network activity and threats.", url: "https://www.vectra.ai", price: "Paid" },
    { name: "Cisco Stealthwatch", category: "Networking", subcategory: "Anomaly Detection", desc: "AI-based anomaly detection for traffic patterns and potential attacks.", url: "https://www.cisco.com/c/en/us/products/security/stealthwatch", price: "Paid" },
    { name: "ExtraHop Reveal(x)", category: "Networking", subcategory: "Anomaly Detection", desc: "AI-powered network detection and response for anomalies and threats.", url: "https://www.extrahop.com/products/revealx/", price: "Paid" },
    { name: "IBM QRadar", category: "Networking", subcategory: "Anomaly Detection", desc: "AI analytics for identifying anomalies and security incidents in networks.", url: "https://www.ibm.com/security/security-intelligence/qradar", price: "Paid" },


    // Networking Cybersecurity AI Tools
    { name: "Darktrace", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI cybersecurity platform for real-time threat detection and response.", url: "https://www.darktrace.com", price: "Paid" },
    { name: "CrowdStrike Falcon", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI-driven endpoint security and network threat prevention.", url: "https://www.crowdstrike.com", price: "Paid" },
    { name: "Vectra AI", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI platform for detecting and responding to advanced cyber threats.", url: "https://www.vectra.ai", price: "Paid" },
    { name: "Fortinet FortiAI", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI cybersecurity solution for automated threat intelligence and protection.", url: "https://www.fortinet.com", price: "Paid" },
    { name: "Palo Alto Networks Cortex XDR", category: "Networking", subcategory: "Cybersecurity AI", desc: "AI-powered extended detection and response platform for networks.", url: "https://www.paloaltonetworks.com/cortex", price: "Paid" },


    // Networking Load Balancing AI Tools
    { name: "F5 BIG-IP", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-driven application delivery and load balancing platform.", url: "https://www.f5.com/products/big-ip", price: "Paid" },
    { name: "Citrix ADC", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-powered application and load balancing solution.", url: "https://www.citrix.com/products/citrix-adc/", price: "Paid" },
    { name: "Kemp LoadMaster", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-assisted load balancing and application optimization platform.", url: "https://kemptechnologies.com", price: "Paid" },
    { name: "Nginx Plus", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-supported load balancing and web server optimization solution.", url: "https://www.nginx.com/products/nginx/", price: "Paid" },
    { name: "A10 Thunder ADC", category: "Networking", subcategory: "Load Balancing AI", desc: "AI-based load balancing and application delivery controller.", url: "https://www.a10networks.com/products/thunder-adc/", price: "Paid" },


    // Networking Wi-Fi Optimization AI Tools
    { name: "Juniper Mist AI", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-driven platform for Wi-Fi performance optimization and monitoring.", url: "https://www.juniper.net/us/en/products-services/wireless/mist-ai", price: "Paid" },
    { name: "Cisco DNA Center", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-powered Wi-Fi optimization and network performance management.", url: "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center", price: "Paid" },
    { name: "Aruba ESP", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-driven Wi-Fi optimization and predictive network analytics.", url: "https://www.arubanetworks.com/solutions/ai-powered-esp/", price: "Paid" },
    { name: "ExtremeCloud IQ", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI-enabled cloud platform for Wi-Fi management and optimization.", url: "https://www.extremenetworks.com", price: "Paid" },
    { name: "NETSCOUT Omnis", category: "Networking", subcategory: "Wi-Fi Optimization", desc: "AI platform monitoring and optimizing Wi-Fi network performance.", url: "https://www.netscout.com", price: "Paid" },


    // Networking Packet Analysis AI Tools
    { name: "Wireshark", category: "Networking", subcategory: "Packet Analysis", desc: "AI-assisted open-source tool for packet capture and network analysis.", url: "https://www.wireshark.org", price: "Free" },
    { name: "SolarWinds Deep Packet Inspection", category: "Networking", subcategory: "Packet Analysis", desc: "AI-powered packet analysis for traffic and network performance.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },
    { name: "Paessler PRTG", category: "Networking", subcategory: "Packet Analysis", desc: "AI-enabled packet sniffing and network traffic analysis platform.", url: "https://www.paessler.com/prtg", price: "Paid" },
    { name: "ntopng", category: "Networking", subcategory: "Packet Analysis", desc: "AI-assisted network traffic monitoring and packet analysis tool.", url: "https://www.ntop.org/products/traffic-analysis/ntop/", price: "Free/Paid" },
    { name: "ManageEngine NetFlow Analyzer", category: "Networking", subcategory: "Packet Analysis", desc: "AI platform analyzing network packets and traffic flows.", url: "https://www.manageengine.com/products/netflow/", price: "Paid" },

    // Food Recipe Generation AI Tools
    { name: "ChefGPT", category: "Food", subcategory: "Recipe Generation", desc: "AI-powered platform generating recipes based on available ingredients.", url: "https://www.chefgpt.com", price: "Free/Paid" },
    { name: "Plant Jammer", category: "Food", subcategory: "Recipe Generation", desc: "AI tool creating recipes with plant-based ingredients and substitutions.", url: "https://www.plantjammer.com", price: "Free/Paid" },
    { name: "Tasty AI", category: "Food", subcategory: "Recipe Generation", desc: "AI-driven recipe generator providing personalized meal ideas.", url: "https://tasty.co", price: "Free/Paid" },
    { name: "Cookpad AI", category: "Food", subcategory: "Recipe Generation", desc: "AI-assisted recipe generation and meal inspiration platform.", url: "https://www.cookpad.com", price: "Free/Paid" },
    { name: "SideChef", category: "Food", subcategory: "Recipe Generation", desc: "AI-powered platform offering personalized recipes and cooking instructions.", url: "https://www.sidechef.com", price: "Free/Paid" },


    // Food Meal Planning AI Tools
    { name: "Eat This Much", category: "Food", subcategory: "Meal Planning AI", desc: "AI-powered meal planning platform generating weekly menus automatically.", url: "https://www.eatthismuch.com", price: "Free/Paid" },
    { name: "PlateJoy", category: "Food", subcategory: "Meal Planning AI", desc: "AI-driven meal planner providing personalized nutrition and grocery lists.", url: "https://www.platejoy.com", price: "Paid" },
    { name: "Mealime", category: "Food", subcategory: "Meal Planning AI", desc: "AI-assisted meal planning app optimizing for preferences and dietary goals.", url: "https://www.mealime.com", price: "Free/Paid" },
    { name: "Yummly", category: "Food", subcategory: "Meal Planning AI", desc: "AI-powered meal planner offering recipe suggestions and grocery integration.", url: "https://www.yummly.com", price: "Free/Paid" },
    { name: "Prepear", category: "Food", subcategory: "Meal Planning AI", desc: "AI platform for meal planning, recipes, and weekly menu creation.", url: "https://www.prepear.com", price: "Free/Paid" },


    // Food Nutrition Analysis AI Tools
    { name: "Spoonacular", category: "Food", subcategory: "Nutrition Analysis", desc: "AI platform providing nutrition information for recipes and ingredients.", url: "https://spoonacular.com", price: "Free/Paid" },
    { name: "Nutrimind", category: "Food", subcategory: "Nutrition Analysis", desc: "AI-powered nutrition analysis tool for personalized dietary insights.", url: "https://www.nutrimind.ai", price: "Paid" },
    { name: "Foodvisor", category: "Food", subcategory: "Nutrition Analysis", desc: "AI-driven app analyzing meal photos and providing nutrition information.", url: "https://www.foodvisor.io", price: "Free/Paid" },
    { name: "CalorieMama", category: "Food", subcategory: "Nutrition Analysis", desc: "AI platform analyzing food photos to provide nutritional breakdowns.", url: "https://www.caloriemama.ai", price: "Free/Paid" },
    { name: "Bitesnap", category: "Food", subcategory: "Nutrition Analysis", desc: "AI-powered food recognition and nutrition tracking platform.", url: "https://www.bitesnap.com", price: "Free/Paid" },


    // Food Calorie Tracking AI Tools
    { name: "MyFitnessPal", category: "Food", subcategory: "Calorie Tracking", desc: "AI-powered app for tracking calories, macros, and meals.", url: "https://www.myfitnesspal.com", price: "Free/Paid" },
    { name: "Lose It!", category: "Food", subcategory: "Calorie Tracking", desc: "AI-assisted calorie and weight tracking app with food recognition.", url: "https://www.loseit.com", price: "Free/Paid" },
    { name: "Cronometer", category: "Food", subcategory: "Calorie Tracking", desc: "AI-powered app providing detailed calorie and nutrient tracking.", url: "https://cronometer.com", price: "Free/Paid" },
    { name: "Lifesum", category: "Food", subcategory: "Calorie Tracking", desc: "AI app for tracking calories, nutrition, and health goals.", url: "https://www.lifesum.com", price: "Free/Paid" },
    { name: "Yazio", category: "Food", subcategory: "Calorie Tracking", desc: "AI-driven calorie counter and nutrition tracker app.", url: "https://www.yazio.com", price: "Free/Paid" },


    // Food Food Recognition AI Tools
    { name: "FoodAI by Clarifai", category: "Food", subcategory: "Food Recognition", desc: "AI platform recognizing food items in images for analysis and tracking.", url: "https://www.clarifai.com/models/food-image-recognition", price: "Free/Paid" },
    { name: "CalorieMama", category: "Food", subcategory: "Food Recognition", desc: "AI app identifying food items from photos and calculating nutrition.", url: "https://www.caloriemama.ai", price: "Free/Paid" },
    { name: "Bitesnap", category: "Food", subcategory: "Food Recognition", desc: "AI-driven platform recognizing foods and tracking nutrition from photos.", url: "https://www.bitesnap.com", price: "Free/Paid" },
    { name: "Foodvisor", category: "Food", subcategory: "Food Recognition", desc: "AI-powered image recognition for identifying foods and nutrition.", url: "https://www.foodvisor.io", price: "Free/Paid" },
    { name: "Spoonacular Food API", category: "Food", subcategory: "Food Recognition", desc: "AI-based food recognition API for identifying ingredients and meals.", url: "https://spoonacular.com/food-api", price: "Paid" },


    // Food Diet Recommendations AI Tools
    { name: "Nutrimind", category: "Food", subcategory: "Diet Recommendations", desc: "AI-powered personalized diet recommendations based on health data.", url: "https://www.nutrimind.ai", price: "Paid" },
    { name: "PlateJoy", category: "Food", subcategory: "Diet Recommendations", desc: "AI-driven personalized diet and meal recommendations.", url: "https://www.platejoy.com", price: "Paid" },
    { name: "Eat This Much", category: "Food", subcategory: "Diet Recommendations", desc: "AI platform generating diet plans tailored to individual goals.", url: "https://www.eatthismuch.com", price: "Free/Paid" },
    { name: "Yazio", category: "Food", subcategory: "Diet Recommendations", desc: "AI-powered diet and nutrition recommendation app.", url: "https://www.yazio.com", price: "Free/Paid" },
    { name: "Lifesum", category: "Food", subcategory: "Diet Recommendations", desc: "AI app providing personalized diet guidance and healthy meal suggestions.", url: "https://www.lifesum.com", price: "Free/Paid" },


    // Food Menu Optimization AI Tools
    { name: "Foodpairing", category: "Food", subcategory: "Menu Optimization", desc: "AI platform for optimizing menus based on flavors and ingredient compatibility.", url: "https://www.foodpairing.com", price: "Paid" },
    { name: "Grubhub Insights", category: "Food", subcategory: "Menu Optimization", desc: "AI-powered analytics for restaurant menu optimization and trends.", url: "https://www.grubhub.com", price: "Paid" },
    { name: "Toast Analytics", category: "Food", subcategory: "Menu Optimization", desc: "AI analytics platform for menu performance and optimization in restaurants.", url: "https://pos.toasttab.com", price: "Paid" },
    { name: "Tovala", category: "Food", subcategory: "Menu Optimization", desc: "AI-assisted smart kitchen platform optimizing meal selection and preparation.", url: "https://www.tovala.com", price: "Paid" },
    { name: "IBM Watson for Food", category: "Food", subcategory: "Menu Optimization", desc: "AI tool for optimizing menus and predicting customer preferences.", url: "https://www.ibm.com/watson", price: "Paid" },


    // Food Smart Kitchen AI Tools
    { name: "June Oven", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-powered smart oven that automates cooking and meal preparation.", url: "https://juneoven.com", price: "Paid" },
    { name: "Tovala", category: "Food", subcategory: "Smart Kitchen AI", desc: "Smart kitchen platform with AI-driven cooking automation.", url: "https://www.tovala.com", price: "Paid" },
    { name: "Hestan Cue", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-assisted smart cookware for guided cooking and precise control.", url: "https://www.hestancue.com", price: "Paid" },
    { name: "Drop Kitchen", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-enabled smart kitchen devices with recipe integration.", url: "https://www.getdrop.com", price: "Paid" },
    { name: "Brava Oven", category: "Food", subcategory: "Smart Kitchen AI", desc: "AI-powered smart oven with guided cooking and automated settings.", url: "https://www.brava.com", price: "Paid" },


    // Food Ingredient Substitution AI Tools
    { name: "Plant Jammer", category: "Food", subcategory: "Ingredient Substitution", desc: "AI tool suggesting ingredient substitutions for recipes.", url: "https://www.plantjammer.com", price: "Free/Paid" },
    { name: "Spoonacular", category: "Food", subcategory: "Ingredient Substitution", desc: "AI-powered recipe API suggesting substitutions for ingredients.", url: "https://spoonacular.com/food-api", price: "Paid" },
    { name: "Cookpad AI", category: "Food", subcategory: "Ingredient Substitution", desc: "AI platform recommending alternative ingredients in recipes.", url: "https://www.cookpad.com", price: "Free/Paid" },
    { name: "Yummly", category: "Food", subcategory: "Ingredient Substitution", desc: "AI-driven app providing ingredient substitution suggestions.", url: "https://www.yummly.com", price: "Free/Paid" },
    { name: "SideChef", category: "Food", subcategory: "Ingredient Substitution", desc: "AI-powered recipe app offering alternative ingredient suggestions.", url: "https://www.sidechef.com", price: "Free/Paid" },


    // Food Restaurant Analytics AI Tools
    { name: "Toast Analytics", category: "Food", subcategory: "Restaurant Analytics", desc: "AI-powered analytics platform for restaurant operations and sales insights.", url: "https://pos.toasttab.com", price: "Paid" },
    { name: "Upserve by Lightspeed", category: "Food", subcategory: "Restaurant Analytics", desc: "AI platform providing restaurant analytics, sales, and customer insights.", url: "https://upserve.com", price: "Paid" },
    { name: "Square for Restaurants", category: "Food", subcategory: "Restaurant Analytics", desc: "AI-assisted analytics for restaurant management and performance tracking.", url: "https://squareup.com", price: "Paid" },
    { name: "SevenRooms", category: "Food", subcategory: "Restaurant Analytics", desc: "AI-powered platform offering restaurant analytics and guest experience insights.", url: "https://sevenrooms.com", price: "Paid" },
    { name: "Zenput", category: "Food", subcategory: "Restaurant Analytics", desc: "AI platform for operational analytics and compliance in restaurants.", url: "https://www.zenput.com", price: "Paid" },


    // Shopping Price Comparison AI Tools
    { name: "Prisync", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-powered platform tracking competitor prices and automating comparisons.", url: "https://prisync.com", price: "Paid" },
    { name: "Price2Spy", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-enabled price monitoring and comparison tool for e-commerce.", url: "https://www.price2spy.com", price: "Paid" },
    { name: "Shopify Price Comparison Apps", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI tools for comparing prices across e-commerce platforms.", url: "https://www.shopify.com/apps", price: "Paid" },
    { name: "Keepa", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-assisted Amazon price tracking and comparison tool.", url: "https://keepa.com", price: "Free/Paid" },
    { name: "CamelCamelCamel", category: "Shopping", subcategory: "Price Comparison AI", desc: "AI-based Amazon price tracker and historical price comparison platform.", url: "https://camelcamelcamel.com", price: "Free" },


    // Shopping Product Recommendation AI Tools
    { name: "Nosto", category: "Shopping", subcategory: "Product Recommendation", desc: "AI-powered personalization and product recommendation platform.", url: "https://www.nosto.com", price: "Paid" },
    { name: "Algolia Recommend", category: "Shopping", subcategory: "Product Recommendation", desc: "AI-based product recommendation engine for e-commerce.", url: "https://www.algolia.com", price: "Paid" },
    { name: "Dynamic Yield", category: "Shopping", subcategory: "Product Recommendation", desc: "AI platform providing personalized product recommendations and experiences.", url: "https://www.dynamicyield.com", price: "Paid" },
    { name: "Salesforce Commerce Cloud", category: "Shopping", subcategory: "Product Recommendation", desc: "AI-driven product recommendation and personalization platform.", url: "https://www.salesforce.com/products/commerce-cloud/overview/", price: "Paid" },
    { name: "Klevu", category: "Shopping", subcategory: "Product Recommendation", desc: "AI search and recommendation platform for e-commerce products.", url: "https://www.klevu.com", price: "Paid" },


    // Shopping Visual Search AI Tools
    { name: "Slyce", category: "Shopping", subcategory: "Visual Search", desc: "AI-powered visual search platform for retail and e-commerce.", url: "https://www.slyce.it", price: "Paid" },
    { name: "ViSenze", category: "Shopping", subcategory: "Visual Search", desc: "AI visual search and image recognition platform for product discovery.", url: "https://www.visenze.com", price: "Paid" },
    { name: "Syte", category: "Shopping", subcategory: "Visual Search", desc: "AI-based visual search and product recommendation platform.", url: "https://www.syte.ai", price: "Paid" },
    { name: "Pinterest Lens", category: "Shopping", subcategory: "Visual Search", desc: "AI visual search tool for discovering products through images.", url: "https://www.pinterest.com/lens", price: "Free" },
    { name: "CamFind", category: "Shopping", subcategory: "Visual Search", desc: "AI app for visual product search using images captured via camera.", url: "https://www.camfindapp.com", price: "Free" },


    // Shopping Style / Outfit Suggestions AI Tools
    { name: "Vue.ai", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI-powered styling and outfit recommendation platform.", url: "https://vue.ai", price: "Paid" },
    { name: "Fashwell", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI visual search and style recommendation platform for fashion.", url: "https://www.fashwell.com", price: "Paid" },
    { name: "Stylumia", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI-driven fashion trend and outfit recommendation engine.", url: "https://www.stylumia.ai", price: "Paid" },
    { name: "Lily AI", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI platform for personalized fashion recommendations and styling.", url: "https://www.lily.ai", price: "Paid" },
    { name: "Heuritech", category: "Shopping", subcategory: "Style / Outfit Suggestions", desc: "AI platform predicting fashion trends and providing outfit suggestions.", url: "https://www.heuritech.com", price: "Paid" },


    // Shopping Smart Cart Management AI Tools
    { name: "Cortexica SmartCart", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-assisted smart cart platform optimizing product recommendations and upsells.", url: "https://www.cortexica.com", price: "Paid" },
    { name: "Nosto", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-powered platform for personalized cart recommendations and promotions.", url: "https://www.nosto.com", price: "Paid" },
    { name: "Dynamic Yield", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-driven cart personalization and automated upselling platform.", url: "https://www.dynamicyield.com", price: "Paid" },
    { name: "Reflektion", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI platform optimizing e-commerce cart experience and product recommendations.", url: "https://www.reflektion.com", price: "Paid" },
    { name: "Barilliance", category: "Shopping", subcategory: "Smart Cart Management", desc: "AI-powered platform for cart management, recommendations, and recovery.", url: "https://www.barilliance.com", price: "Paid" },


    // Shopping Discount & Deal Finder AI Tools
    { name: "Honey", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-powered browser extension finding discounts, coupons, and deals automatically.", url: "https://www.joinhoney.com", price: "Free" },
    { name: "RetailMeNot", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-assisted platform for discovering coupons, promo codes, and deals.", url: "https://www.retailmenot.com", price: "Free" },
    { name: "ShopSavvy", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-based app comparing prices and finding the best deals across stores.", url: "https://www.shopsavvy.com", price: "Free" },
    { name: "Capital One Shopping", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-powered tool finding deals and applying coupons automatically.", url: "https://www.capitaloneshopping.com", price: "Free" },
    { name: "CouponBirds", category: "Shopping", subcategory: "Discount & Deal Finder", desc: "AI-assisted platform for finding online coupons and discounts.", url: "https://www.couponbirds.com", price: "Free" },


    // Shopping Inventory Prediction AI Tools
    { name: "Llamasoft", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI platform forecasting inventory demand and optimizing supply chains.", url: "https://www.llamasoft.com", price: "Paid" },
    { name: "ClearMetal", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-driven inventory and supply chain prediction platform.", url: "https://www.clearmetal.com", price: "Paid" },
    { name: "Blue Yonder", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-powered inventory optimization and demand forecasting tool.", url: "https://blueyonder.com", price: "Paid" },
    { name: "E2open", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-assisted inventory prediction and supply chain management platform.", url: "https://www.e2open.com", price: "Paid" },
    { name: "o9 Solutions", category: "Shopping", subcategory: "Inventory Prediction", desc: "AI-powered platform for inventory planning and demand forecasting.", url: "https://o9solutions.com", price: "Paid" },


    // Shopping Customer Review Analysis AI Tools
    { name: "MonkeyLearn", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI platform analyzing customer reviews and feedback for insights.", url: "https://monkeylearn.com", price: "Free/Paid" },
    { name: "Lexalytics", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI-driven platform for sentiment analysis and review mining.", url: "https://www.lexalytics.com", price: "Paid" },
    { name: "ReviewTrackers", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI-powered platform for analyzing customer reviews and ratings.", url: "https://www.reviewtrackers.com", price: "Paid" },
    { name: "Yotpo", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI-enabled platform for customer review analytics and insights.", url: "https://www.yotpo.com", price: "Paid" },
    { name: "Talkwalker", category: "Shopping", subcategory: "Customer Review Analysis", desc: "AI platform analyzing social and customer reviews for brand insights.", url: "https://www.talkwalker.com", price: "Paid" },


    // Shopping Personalized Offers AI Tools
    { name: "Dynamic Yield", category: "Shopping", subcategory: "Personalized Offers", desc: "AI platform delivering personalized promotions and product offers.", url: "https://www.dynamicyield.com", price: "Paid" },
    { name: "Nosto", category: "Shopping", subcategory: "Personalized Offers", desc: "AI-powered personalization engine for personalized deals and recommendations.", url: "https://www.nosto.com", price: "Paid" },
    { name: "Salesforce Commerce Cloud", category: "Shopping", subcategory: "Personalized Offers", desc: "AI-assisted platform delivering personalized offers and product suggestions.", url: "https://www.salesforce.com/products/commerce-cloud/overview/", price: "Paid" },
    { name: "Barilliance", category: "Shopping", subcategory: "Personalized Offers", desc: "AI platform for personalized e-commerce offers, upsells, and discounts.", url: "https://www.barilliance.com", price: "Paid" },
    { name: "Algolia Recommend", category: "Shopping", subcategory: "Personalized Offers", desc: "AI-powered personalization for delivering custom offers and recommendations.", url: "https://www.algolia.com", price: "Paid" },


    // Shopping E-commerce Analytics AI Tools
    { name: "Heap", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-powered analytics platform tracking e-commerce customer behavior.", url: "https://heap.io", price: "Free/Paid" },
    { name: "Google Analytics 4", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-assisted e-commerce analytics for traffic, conversions, and user behavior.", url: "https://analytics.google.com", price: "Free" },
    { name: "Mixpanel", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-driven analytics for user behavior and e-commerce performance.", url: "https://mixpanel.com", price: "Free/Paid" },
    { name: "Kissmetrics", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-powered analytics for tracking e-commerce performance and conversion.", url: "https://www.kissmetrics.io", price: "Paid" },
    { name: "Adobe Analytics", category: "Shopping", subcategory: "E-commerce Analytics", desc: "AI-enabled e-commerce analytics platform providing deep insights.", url: "https://www.adobe.com/analytics", price: "Paid" },


    // Education AI Tutoring Tools
    { name: "Socratic by Google", category: "Education", subcategory: "AI Tutoring", desc: "AI-powered tutoring app providing explanations and step-by-step solutions.", url: "https://socratic.org", price: "Free" },
    { name: "Khan Academy", category: "Education", subcategory: "AI Tutoring", desc: "AI-assisted platform offering personalized tutoring and learning paths.", url: "https://www.khanacademy.org", price: "Free" },
    { name: "Brainly", category: "Education", subcategory: "AI Tutoring", desc: "AI-powered community tutoring platform for homework and learning help.", url: "https://brainly.com", price: "Free/Paid" },
    { name: "Thinkster Math", category: "Education", subcategory: "AI Tutoring", desc: "AI-driven math tutoring platform providing personalized guidance.", url: "https://hellothinkster.com", price: "Paid" },
    { name: "Querium", category: "Education", subcategory: "AI Tutoring", desc: "AI-based STEM tutoring platform with step-by-step feedback.", url: "https://querium.com", price: "Paid" },


    // Education Homework Assistance AI Tools
    { name: "Chegg Study", category: "Education", subcategory: "Homework Assistance", desc: "AI-powered platform offering homework solutions and explanations.", url: "https://www.chegg.com/study", price: "Paid" },
    { name: "Brainly", category: "Education", subcategory: "Homework Assistance", desc: "AI-assisted homework help community providing step-by-step solutions.", url: "https://brainly.com", price: "Free/Paid" },
    { name: "Socratic by Google", category: "Education", subcategory: "Homework Assistance", desc: "AI app helping students solve homework questions using explanations.", url: "https://socratic.org", price: "Free" },
    { name: "Quizlet", category: "Education", subcategory: "Homework Assistance", desc: "AI-driven flashcards and homework study assistance platform.", url: "https://quizlet.com", price: "Free/Paid" },
    { name: "Photomath", category: "Education", subcategory: "Homework Assistance", desc: "AI app solving math problems from pictures with step-by-step guidance.", url: "https://photomath.app", price: "Free/Paid" },


    // Education Language Learning AI Tools
    { name: "Duolingo", category: "Education", subcategory: "Language Learning", desc: "AI-powered language learning platform with personalized lessons.", url: "https://www.duolingo.com", price: "Free/Paid" },
    { name: "Babbel", category: "Education", subcategory: "Language Learning", desc: "AI-assisted language learning app offering interactive lessons.", url: "https://www.babbel.com", price: "Paid" },
    { name: "Rosetta Stone", category: "Education", subcategory: "Language Learning", desc: "AI-driven language learning platform with immersive experiences.", url: "https://www.rosettastone.com", price: "Paid" },
    { name: "Busuu", category: "Education", subcategory: "Language Learning", desc: "AI-based language learning app with personalized feedback.", url: "https://www.busuu.com", price: "Free/Paid" },
    { name: "LingQ", category: "Education", subcategory: "Language Learning", desc: "AI-powered platform for learning languages through content immersion.", url: "https://www.lingq.com", price: "Paid" },


    // Education Exam Preparation AI Tools
    { name: "PrepScholar", category: "Education", subcategory: "Exam Preparation", desc: "AI-assisted platform for personalized SAT, ACT, and exam prep.", url: "https://www.prepscholar.com", price: "Paid" },
    { name: "Magoosh", category: "Education", subcategory: "Exam Preparation", desc: "AI-powered platform for GRE, GMAT, and other standardized exams.", url: "https://magoosh.com", price: "Paid" },
    { name: "Quizlet", category: "Education", subcategory: "Exam Preparation", desc: "AI-assisted platform for creating study sets and exam prep materials.", url: "https://quizlet.com", price: "Free/Paid" },
    { name: "Brilliant", category: "Education", subcategory: "Exam Preparation", desc: "AI-driven problem-solving and exam preparation platform.", url: "https://www.brilliant.org", price: "Free/Paid" },
    { name: "Edulastic", category: "Education", subcategory: "Exam Preparation", desc: "AI platform for practice tests and formative assessment preparation.", url: "https://edulastic.com", price: "Free/Paid" },


    // Education Personalized Learning AI Tools
    { name: "Knewton Alta", category: "Education", subcategory: "Personalized Learning", desc: "AI-powered platform offering adaptive learning for students.", url: "https://www.knewton.com", price: "Paid" },
    { name: "Smart Sparrow", category: "Education", subcategory: "Personalized Learning", desc: "AI-assisted adaptive learning platform for personalized experiences.", url: "https://www.smartsparrow.com", price: "Paid" },
    { name: "DreamBox", category: "Education", subcategory: "Personalized Learning", desc: "AI-driven math platform providing personalized learning paths.", url: "https://www.dreambox.com", price: "Paid" },
    { name: "Squirrel AI", category: "Education", subcategory: "Personalized Learning", desc: "AI adaptive learning platform for individualized education.", url: "https://www.squirrelai.com", price: "Paid" },
    { name: "Century Tech", category: "Education", subcategory: "Personalized Learning", desc: "AI platform delivering personalized learning and analytics to students.", url: "https://www.century.tech", price: "Paid" },


    // Education Quiz / Test Generation AI Tools
    { name: "Quizlet", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-assisted platform for generating quizzes and practice tests.", url: "https://quizlet.com", price: "Free/Paid" },
    { name: "Kahoot!", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-powered tool for creating interactive quizzes and assessments.", url: "https://kahoot.com", price: "Free/Paid" },
    { name: "Socrative", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-enabled platform for creating quizzes, polls, and formative assessments.", url: "https://www.socrative.com", price: "Free/Paid" },
    { name: "GoConqr", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI platform for generating quizzes and learning resources.", url: "https://www.goconqr.com", price: "Free/Paid" },
    { name: "ExamSoft", category: "Education", subcategory: "Quiz / Test Generation", desc: "AI-assisted platform for generating and analyzing exams securely.", url: "https://examsoft.com", price: "Paid" },


    // Education Content Summarization AI Tools
    { name: "Scholarcy", category: "Education", subcategory: "Content Summarization", desc: "AI-powered tool summarizing research papers and articles.", url: "https://www.scholarcy.com", price: "Free/Paid" },
    { name: "SMMRY", category: "Education", subcategory: "Content Summarization", desc: "AI-assisted platform for summarizing articles and documents.", url: "https://smmry.com", price: "Free" },
    { name: "Resoomer", category: "Education", subcategory: "Content Summarization", desc: "AI tool that automatically summarizes texts for students and researchers.", url: "https://www.resoomer.com", price: "Free/Paid" },
    { name: "QuillBot", category: "Education", subcategory: "Content Summarization", desc: "AI-powered summarizer and paraphrasing tool for learning content.", url: "https://quillbot.com", price: "Free/Paid" },
    { name: "Scholarcy Chrome Extension", category: "Education", subcategory: "Content Summarization", desc: "AI-assisted extension summarizing online articles and research papers.", url: "https://www.scholarcy.com/chrome-extension", price: "Free/Paid" },


    // Education Interactive Lessons AI Tools
    { name: "Nearpod", category: "Education", subcategory: "Interactive Lessons", desc: "AI-assisted platform for creating interactive lessons and activities.", url: "https://www.nearpod.com", price: "Free/Paid" },
    { name: "Edpuzzle", category: "Education", subcategory: "Interactive Lessons", desc: "AI-powered platform for making interactive video lessons.", url: "https://edpuzzle.com", price: "Free/Paid" },
    { name: "Pear Deck", category: "Education", subcategory: "Interactive Lessons", desc: "AI-assisted tool for designing interactive presentations and lessons.", url: "https://www.peardeck.com", price: "Free/Paid" },
    { name: "Genially", category: "Education", subcategory: "Interactive Lessons", desc: "AI platform for creating interactive content and lessons.", url: "https://www.genial.ly", price: "Free/Paid" },
    { name: "ThingLink", category: "Education", subcategory: "Interactive Lessons", desc: "AI-powered platform for interactive images, videos, and lessons.", url: "https://www.thinglink.com", price: "Free/Paid" },


    // Education Virtual Labs AI Tools
    { name: "Labster", category: "Education", subcategory: "Virtual Labs", desc: "AI-powered virtual lab simulations for science education.", url: "https://www.labster.com", price: "Paid" },
    { name: "PraxiLabs", category: "Education", subcategory: "Virtual Labs", desc: "AI-assisted virtual labs for biology, chemistry, and physics experiments.", url: "https://www.praxilabs.com", price: "Paid" },
    { name: "Beyond Labz", category: "Education", subcategory: "Virtual Labs", desc: "AI-driven virtual lab platform for interactive science experiments.", url: "https://www.beyondlabz.com", price: "Paid" },
    { name: "Visible Body", category: "Education", subcategory: "Virtual Labs", desc: "AI-assisted interactive 3D anatomy and biology virtual labs.", url: "https://www.visiblebody.com", price: "Paid" },
    { name: "ChemCollective", category: "Education", subcategory: "Virtual Labs", desc: "AI-powered virtual chemistry lab simulations for learning experiments.", url: "http://chemcollective.org", price: "Free" },


    // Education Learning Analytics AI Tools
    { name: "Knewton Alta", category: "Education", subcategory: "Learning Analytics", desc: "AI-powered platform providing learning analytics and adaptive feedback.", url: "https://www.knewton.com", price: "Paid" },
    { name: "Edmodo Insights", category: "Education", subcategory: "Learning Analytics", desc: "AI-assisted platform analyzing student performance and engagement.", url: "https://new.edmodo.com", price: "Free/Paid" },
    { name: "Civitas Learning", category: "Education", subcategory: "Learning Analytics", desc: "AI platform providing analytics for student learning outcomes.", url: "https://www.civitaslearning.com", price: "Paid" },
    { name: "Brightspace Insights", category: "Education", subcategory: "Learning Analytics", desc: "AI-driven learning analytics platform for tracking and improving student performance.", url: "https://www.d2l.com/brightspace", price: "Paid" },
    { name: "Instructure Analytics", category: "Education", subcategory: "Learning Analytics", desc: "AI-powered learning analytics platform integrated with LMS solutions.", url: "https://www.instructure.com", price: "Paid" },


    // Entertainment Movie/TV Recommendations AI Tools
    { name: "Reelgood", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-powered platform providing personalized movie and TV show recommendations.", url: "https://reelgood.com", price: "Free/Paid" },
    { name: "TasteDive", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-assisted recommendation engine for movies, TV shows, and media.", url: "https://tastedive.com", price: "Free/Paid" },
    { name: "CineTrak", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-powered movie and TV recommendation platform with ratings tracking.", url: "https://www.cinetrak.com", price: "Free/Paid" },
    { name: "Movix AI", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI platform for personalized movie and TV show suggestions.", url: "https://www.movix.ai", price: "Free/Paid" },
    { name: "Jinni", category: "Entertainment", subcategory: "Movie/TV Recommendations", desc: "AI-based entertainment discovery platform for movies and TV.", url: "https://www.jinni.com", price: "Paid" },


    // Entertainment Music Recommendations AI Tools
    { name: "Spotify AI", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI-powered music recommendation and playlist personalization platform.", url: "https://www.spotify.com", price: "Free/Paid" },
    { name: "Pandora", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI-assisted music discovery and personalized radio stations.", url: "https://www.pandora.com", price: "Free/Paid" },
    { name: "SoundHound", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI-powered music discovery and personalized song recommendations.", url: "https://www.soundhound.com", price: "Free/Paid" },
    { name: "Musicovery", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI music recommendation platform providing mood-based playlists.", url: "https://musicovery.com", price: "Free/Paid" },
    { name: "Boomy", category: "Entertainment", subcategory: "Music Recommendations", desc: "AI platform generating music and recommending tracks for users.", url: "https://www.boomy.com", price: "Free/Paid" },


    // Entertainment Playlist Generators AI Tools
    { name: "Endel", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI-powered platform creating personalized soundscapes and playlists.", url: "https://www.endel.io", price: "Free/Paid" },
    { name: "Aiva", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI music composer generating personalized playlists and compositions.", url: "https://www.aiva.ai", price: "Free/Paid" },
    { name: "Amper Music", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI-driven platform creating custom music and playlists for users.", url: "https://www.ampermusic.com", price: "Free/Paid" },
    { name: "Boomy", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI platform generating custom playlists and music tracks automatically.", url: "https://www.boomy.com", price: "Free/Paid" },
    { name: "Soundraw", category: "Entertainment", subcategory: "Playlist Generators", desc: "AI music generator creating adaptive playlists and tracks.", url: "https://soundraw.io", price: "Paid" },


    // Entertainment AI Storytelling Tools
    { name: "AI Dungeon", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI-powered platform for interactive storytelling and adventure creation.", url: "https://play.aidungeon.io", price: "Free/Paid" },
    { name: "Sudowrite", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI writing assistant for creative storytelling and fiction generation.", url: "https://www.sudowrite.com", price: "Paid" },
    { name: "NovelAI", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI platform for generating creative stories and interactive narratives.", url: "https://novelai.net", price: "Paid" },
    { name: "ShortlyAI", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI-powered storytelling assistant for writers and content creators.", url: "https://www.shortlyai.com", price: "Paid" },
    { name: "StoryStream", category: "Entertainment", subcategory: "AI Storytelling", desc: "AI tool for automated story creation and content personalization.", url: "https://storystream.ai", price: "Paid" },


    // Entertainment Interactive Games AI Tools
    { name: "AI Dungeon", category: "Entertainment", subcategory: "Interactive Games", desc: "AI-powered platform for interactive text-based adventure games.", url: "https://play.aidungeon.io", price: "Free/Paid" },
    { name: "Bot Colony", category: "Entertainment", subcategory: "Interactive Games", desc: "AI-driven interactive game with natural language conversations.", url: "https://www.botcolony.com", price: "Paid" },
    { name: "GPT-3 Game Labs", category: "Entertainment", subcategory: "Interactive Games", desc: "AI platform enabling interactive gaming experiences with GPT-3.", url: "https://openai.com", price: "Paid" },
    { name: "Latitude AI Games", category: "Entertainment", subcategory: "Interactive Games", desc: "AI-powered interactive gaming and storytelling platform.", url: "https://latitude.io", price: "Paid" },
    { name: "Inworld AI", category: "Entertainment", subcategory: "Interactive Games", desc: "AI platform creating intelligent interactive characters for games.", url: "https://inworld.ai", price: "Paid" },


    // Entertainment Virtual Concerts AI Tools
    { name: "Wave", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-powered platform for creating immersive virtual concerts and events.", url: "https://wavexr.com", price: "Paid" },
    { name: "MelodyVR", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-assisted VR platform for live virtual music performances.", url: "https://www.melodyvr.com", price: "Paid" },
    { name: "TheWaveVR", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-driven virtual reality concerts and interactive music experiences.", url: "https://www.thewavevr.com", price: "Free/Paid" },
    { name: "Oculus Venues", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-powered platform for attending live virtual concerts in VR.", url: "https://www.oculus.com/experiences/venues", price: "Free/Paid" },
    { name: "NextVR", category: "Entertainment", subcategory: "Virtual Concerts", desc: "AI-enabled immersive virtual reality concerts and sports events.", url: "https://www.nextvr.com", price: "Paid" },


    // Entertainment Voice Cloning for Fun AI Tools
    { name: "Voicemod", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI-powered voice changer and voice cloning software.", url: "https://www.voicemod.net", price: "Free/Paid" },
    { name: "Resemble AI", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI platform for realistic voice cloning and synthesis.", url: "https://www.resemble.ai", price: "Paid" },
    { name: "iSpeech", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI-powered text-to-speech and voice cloning platform.", url: "https://www.ispeech.org", price: "Free/Paid" },
    { name: "VocaliD", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI platform for custom voice cloning and voice generation.", url: "https://vocalid.ai", price: "Paid" },
    { name: "Altered Studio", category: "Entertainment", subcategory: "Voice Cloning for Fun", desc: "AI tool for creating realistic voice clones for entertainment.", url: "https://www.altered.ai", price: "Paid" },


    // Entertainment Fan Art Generation AI Tools
    { name: "Artbreeder", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI-powered platform for creating fan art and visual content.", url: "https://www.artbreeder.com", price: "Free/Paid" },
    { name: "DeepArt", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI platform transforming photos into artistic fan art creations.", url: "https://deepart.io", price: "Free/Paid" },
    { name: "Runway ML", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI tool for creating generative art and fan illustrations.", url: "https://runwayml.com", price: "Free/Paid" },
    { name: "Fotor AI Art Generator", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI-powered platform for generating fan art from text prompts.", url: "https://www.fotor.com/features/ai-image-generator", price: "Free/Paid" },
    { name: "NightCafe", category: "Entertainment", subcategory: "Fan Art Generation", desc: "AI-based platform for creating fan art and AI-generated images.", url: "https://creator.nightcafe.studio", price: "Free/Paid" },


    // Entertainment Meme Generation AI Tools
    { name: "Imgflip AI Meme Generator", category: "Entertainment", subcategory: "Meme Generation", desc: "AI-powered meme creation platform generating memes automatically.", url: "https://imgflip.com/ai-meme", price: "Free/Paid" },
    { name: "MemeBot AI", category: "Entertainment", subcategory: "Meme Generation", desc: "AI-assisted tool generating humorous memes from text prompts.", url: "https://memebot.ai", price: "Free/Paid" },
    { name: "Kapwing AI Meme Maker", category: "Entertainment", subcategory: "Meme Generation", desc: "AI platform for creating and editing memes easily online.", url: "https://www.kapwing.com/meme-maker", price: "Free/Paid" },
    { name: "Make a Meme AI", category: "Entertainment", subcategory: "Meme Generation", desc: "AI tool for generating memes with custom text and images.", url: "https://makeameme.org", price: "Free" },
    { name: "DeepAI Meme Generator", category: "Entertainment", subcategory: "Meme Generation", desc: "AI-powered platform generating memes using neural networks.", url: "https://deepai.org/machine-learning-model/meme-generator", price: "Free" },


    // Entertainment AI Quizzes Tools
    { name: "Kahoot!", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-assisted platform for creating interactive quizzes and trivia.", url: "https://kahoot.com", price: "Free/Paid" },
    { name: "Quizizz", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-powered platform for generating and playing quizzes online.", url: "https://quizizz.com", price: "Free/Paid" },
    { name: "Sporcle", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-assisted platform for trivia quizzes and interactive challenges.", url: "https://www.sporcle.com", price: "Free/Paid" },
    { name: "Quizlet", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-powered platform for quiz creation and study practice.", url: "https://quizlet.com", price: "Free/Paid" },
    { name: "ClassMarker", category: "Entertainment", subcategory: "AI Quizzes", desc: "AI-assisted platform for online quizzes and assessments.", url: "https://www.classmarker.com", price: "Paid" },


    // Security Face Recognition AI Tools
    { name: "Face++", category: "Security", subcategory: "Face Recognition", desc: "AI-powered facial recognition platform for identity verification and security.", url: "https://www.faceplusplus.com", price: "Paid" },
    { name: "Microsoft Azure Face API", category: "Security", subcategory: "Face Recognition", desc: "AI-assisted facial recognition API for applications and security systems.", url: "https://azure.microsoft.com/en-us/services/cognitive-services/face/", price: "Paid" },
    { name: "Amazon Rekognition", category: "Security", subcategory: "Face Recognition", desc: "AI platform for facial recognition and analysis in images and videos.", url: "https://aws.amazon.com/rekognition/", price: "Paid" },
    { name: "Kairos", category: "Security", subcategory: "Face Recognition", desc: "AI-driven facial recognition and emotion detection platform.", url: "https://www.kairos.com", price: "Paid" },
    { name: "FaceFirst", category: "Security", subcategory: "Face Recognition", desc: "AI-powered face recognition system for security and access control.", url: "https://www.facefirst.com", price: "Paid" },


    // Security Surveillance AI Tools
    { name: "Eagle Eye Networks", category: "Security", subcategory: "Surveillance AI", desc: "AI-powered cloud video surveillance platform.", url: "https://www.een.com", price: "Paid" },
    { name: "Avigilon AI", category: "Security", subcategory: "Surveillance AI", desc: "AI-assisted video surveillance and analytics platform.", url: "https://www.avigilon.com", price: "Paid" },
    { name: "BriefCam", category: "Security", subcategory: "Surveillance AI", desc: "AI platform providing video analytics and real-time surveillance insights.", url: "https://www.briefcam.com", price: "Paid" },
    { name: "AnyVision", category: "Security", subcategory: "Surveillance AI", desc: "AI-driven facial recognition and surveillance solution.", url: "https://www.anyvision.com", price: "Paid" },
    { name: "VCA AI", category: "Security", subcategory: "Surveillance AI", desc: "AI-based video content analysis for security and surveillance.", url: "https://www.vca.ai", price: "Paid" },


    // Security Anomaly Detection AI Tools
    { name: "Darktrace", category: "Security", subcategory: "Anomaly Detection", desc: "AI-powered cybersecurity platform detecting unusual behavior and threats.", url: "https://www.darktrace.com", price: "Paid" },
    { name: "Vectra AI", category: "Security", subcategory: "Anomaly Detection", desc: "AI-assisted network threat detection and anomaly analytics.", url: "https://www.vectra.ai", price: "Paid" },
    { name: "Cynet", category: "Security", subcategory: "Anomaly Detection", desc: "AI platform for detecting security anomalies and automated threat response.", url: "https://www.cynet.com", price: "Paid" },
    { name: "Exabeam", category: "Security", subcategory: "Anomaly Detection", desc: "AI-driven user and entity behavior analytics for anomaly detection.", url: "https://www.exabeam.com", price: "Paid" },
    { name: "Securonix", category: "Security", subcategory: "Anomaly Detection", desc: "AI-powered security analytics platform for detecting abnormal activity.", url: "https://www.securonix.com", price: "Paid" },


    // Security Cybersecurity Alerts AI Tools
    { name: "CrowdStrike Falcon", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI platform providing threat detection and real-time alerts.", url: "https://www.crowdstrike.com", price: "Paid" },
    { name: "Palo Alto Networks Cortex XDR", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-assisted platform for detecting threats and generating cybersecurity alerts.", url: "https://www.paloaltonetworks.com/cortex", price: "Paid" },
    { name: "IBM QRadar", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-driven security information and event management with alerts.", url: "https://www.ibm.com/security/qradar", price: "Paid" },
    { name: "LogRhythm", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-powered platform generating real-time cybersecurity alerts.", url: "https://logrhythm.com", price: "Paid" },
    { name: "Splunk Enterprise Security", category: "Security", subcategory: "Cybersecurity Alerts", desc: "AI-assisted analytics platform providing threat alerts and security insights.", url: "https://www.splunk.com/en_us/software/enterprise-security.html", price: "Paid" },


    // Security Password Management AI Tools
    { name: "1Password", category: "Security", subcategory: "Password Management AI", desc: "AI-assisted password manager providing secure storage and suggestions.", url: "https://1password.com", price: "Paid" },
    { name: "LastPass", category: "Security", subcategory: "Password Management AI", desc: "AI-powered password manager with password generation and alerts.", url: "https://www.lastpass.com", price: "Free/Paid" },
    { name: "Dashlane", category: "Security", subcategory: "Password Management AI", desc: "AI-assisted password manager providing secure login and autofill.", url: "https://www.dashlane.com", price: "Free/Paid" },
    { name: "Keeper Security", category: "Security", subcategory: "Password Management AI", desc: "AI-powered password management platform for secure credentials.", url: "https://www.keepersecurity.com", price: "Paid" },
    { name: "Bitwarden", category: "Security", subcategory: "Password Management AI", desc: "AI-assisted password manager providing secure storage and organization.", url: "https://bitwarden.com", price: "Free/Paid" },


    // Security Threat Prediction AI Tools
    { name: "IBM X-Force Exchange", category: "Security", subcategory: "Threat Prediction", desc: "AI-powered platform predicting cyber threats and vulnerabilities.", url: "https://exchange.xforce.ibmcloud.com", price: "Free/Paid" },
    { name: "Recorded Future", category: "Security", subcategory: "Threat Prediction", desc: "AI-assisted threat intelligence platform for proactive threat prediction.", url: "https://www.recordedfuture.com", price: "Paid" },
    { name: "FireEye Helix", category: "Security", subcategory: "Threat Prediction", desc: "AI-driven threat prediction and security management platform.", url: "https://www.fireeye.com/solutions/helix.html", price: "Paid" },
    { name: "Anomali", category: "Security", subcategory: "Threat Prediction", desc: "AI platform providing threat intelligence and predictive analytics.", url: "https://www.anomali.com", price: "Paid" },
    { name: "ThreatConnect", category: "Security", subcategory: "Threat Prediction", desc: "AI-assisted threat intelligence and prediction platform.", url: "https://threatconnect.com", price: "Paid" },


    // Security Smart Lock Control AI Tools
    { name: "August Smart Lock", category: "Security", subcategory: "Smart Lock Control", desc: "AI-powered smart lock system with remote access and control.", url: "https://august.com", price: "Paid" },
    { name: "Yale Smart Lock", category: "Security", subcategory: "Smart Lock Control", desc: "AI-assisted smart lock platform for home security and access control.", url: "https://www.yalehome.com", price: "Paid" },
    { name: "Schlage Encode", category: "Security", subcategory: "Smart Lock Control", desc: "AI-powered smart lock with Wi-Fi connectivity and security management.", url: "https://www.schlage.com", price: "Paid" },
    { name: "Kwikset Kevo", category: "Security", subcategory: "Smart Lock Control", desc: "AI-assisted smart lock system with Bluetooth and remote access.", url: "https://www.kwikset.com", price: "Paid" },
    { name: "Level Lock", category: "Security", subcategory: "Smart Lock Control", desc: "AI-powered smart lock integrated with mobile app control and automation.", url: "https://www.level.co", price: "Paid" },


    // Security Network Monitoring AI Tools
    { name: "Paessler PRTG", category: "Security", subcategory: "Network Monitoring", desc: "AI-powered network monitoring platform for IT infrastructure.", url: "https://www.paessler.com/prtg", price: "Paid" },
    { name: "Nagios XI", category: "Security", subcategory: "Network Monitoring", desc: "AI-assisted platform for monitoring network devices and traffic.", url: "https://www.nagios.com/products/nagios-xi/", price: "Paid" },
    { name: "SolarWinds Network Performance Monitor", category: "Security", subcategory: "Network Monitoring", desc: "AI-driven tool for network monitoring and performance analysis.", url: "https://www.solarwinds.com/network-performance-monitor", price: "Paid" },
    { name: "Zabbix", category: "Security", subcategory: "Network Monitoring", desc: "AI-assisted open-source network monitoring platform.", url: "https://www.zabbix.com", price: "Free/Paid" },
    { name: "LogicMonitor", category: "Security", subcategory: "Network Monitoring", desc: "AI-powered platform for cloud and network infrastructure monitoring.", url: "https://www.logicmonitor.com", price: "Paid" },


    // Security Phishing Detection AI Tools
    { name: "IRONSCALES", category: "Security", subcategory: "Phishing Detection", desc: "AI-powered platform detecting and preventing phishing attacks.", url: "https://ironscales.com", price: "Paid" },
    { name: "KnowBe4", category: "Security", subcategory: "Phishing Detection", desc: "AI-assisted phishing simulation and detection platform.", url: "https://www.knowbe4.com", price: "Paid" },
    { name: "Barracuda Sentinel", category: "Security", subcategory: "Phishing Detection", desc: "AI platform detecting phishing attacks and email threats.", url: "https://www.barracuda.com/products/sentinel", price: "Paid" },
    { name: "Proofpoint Email Protection", category: "Security", subcategory: "Phishing Detection", desc: "AI-driven email security and phishing detection tool.", url: "https://www.proofpoint.com", price: "Paid" },
    { name: "Microsoft Defender for Office 365", category: "Security", subcategory: "Phishing Detection", desc: "AI-powered platform protecting against phishing and malware.", url: "https://www.microsoft.com/security/business/threat-protection/office-365", price: "Paid" },


    // Security Data Encryption AI Tools
    { name: "Vormetric Data Security", category: "Security", subcategory: "Data Encryption AI", desc: "AI-powered platform providing enterprise data encryption and protection.", url: "https://www.thalesgroup.com/en/markets/digital-identity-and-security/data-encryption", price: "Paid" },
    { name: "Symantec Encryption", category: "Security", subcategory: "Data Encryption AI", desc: "AI-assisted data encryption platform for secure communications.", url: "https://www.broadcom.com/products/cyber-security/encryption", price: "Paid" },
    { name: "McAfee Complete Data Protection", category: "Security", subcategory: "Data Encryption AI", desc: "AI-driven encryption and data loss prevention solution.", url: "https://www.mcafee.com/enterprise/en-us/products/complete-data-protection.html", price: "Paid" },
    { name: "IBM Guardium", category: "Security", subcategory: "Data Encryption AI", desc: "AI-powered platform for data encryption, monitoring, and compliance.", url: "https://www.ibm.com/security/data-security/guardium", price: "Paid" },
    { name: "Trend Micro Endpoint Encryption", category: "Security", subcategory: "Data Encryption AI", desc: "AI-assisted platform for secure endpoint data encryption.", url: "https://www.trendmicro.com/en_us/business/products/user-protection/endpoint/endpoint-encryption.html", price: "Paid" },


    // Environment Air Quality Monitoring AI Tools
    { name: "BreezoMeter", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-powered platform providing real-time air quality data and forecasts.", url: "https://www.breezometer.com", price: "Free/Paid" },
    { name: "Plume Labs", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-assisted app monitoring air pollution and providing actionable insights.", url: "https://plumelabs.com", price: "Free/Paid" },
    { name: "Airthings", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-driven indoor and outdoor air quality monitoring solutions.", url: "https://www.airthings.com", price: "Paid" },
    { name: "IQAir", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI platform offering real-time air quality data and pollution forecasts.", url: "https://www.iqair.com", price: "Free/Paid" },
    { name: "Clarity AI", category: "Environment", subcategory: "Air Quality Monitoring", desc: "AI-assisted air quality monitoring system for cities and industries.", url: "https://www.clarity.io", price: "Paid" },


    // Environment Energy Optimization AI Tools
    { name: "GridEdge", category: "Environment", subcategory: "Energy Optimization", desc: "AI-powered platform optimizing energy consumption for buildings and utilities.", url: "https://www.gridedge.io", price: "Paid" },
    { name: "AutoGrid", category: "Environment", subcategory: "Energy Optimization", desc: "AI-assisted energy management platform for demand response and optimization.", url: "https://www.auto-grid.com", price: "Paid" },
    { name: "Verdigris", category: "Environment", subcategory: "Energy Optimization", desc: "AI-driven energy optimization and smart building analytics platform.", url: "https://verdigris.co", price: "Paid" },
    { name: "Carbon Lighthouse", category: "Environment", subcategory: "Energy Optimization", desc: "AI-powered platform reducing energy usage and emissions in buildings.", url: "https://www.carbonlighthouse.com", price: "Paid" },
    { name: "EnergyHub", category: "Environment", subcategory: "Energy Optimization", desc: "AI platform for optimizing energy usage and grid management.", url: "https://www.energyhub.com", price: "Paid" },


    // Environment Waste Management AI Tools
    { name: "Rubicon", category: "Environment", subcategory: "Waste Management AI", desc: "AI-powered platform for smart waste collection and recycling optimization.", url: "https://www.rubiconglobal.com", price: "Paid" },
    { name: "Compology", category: "Environment", subcategory: "Waste Management AI", desc: "AI-assisted waste monitoring platform for efficiency and sustainability.", url: "https://www.compology.com", price: "Paid" },
    { name: "Evreka", category: "Environment", subcategory: "Waste Management AI", desc: "AI-driven platform optimizing waste collection and recycling operations.", url: "https://www.evreka.com", price: "Paid" },
    { name: "ZenRobotics", category: "Environment", subcategory: "Waste Management AI", desc: "AI platform automating waste sorting and recycling using robotics.", url: "https://www.zenrobotics.com", price: "Paid" },
    { name: "Bigbelly Smart Waste", category: "Environment", subcategory: "Waste Management AI", desc: "AI-assisted smart waste management system with real-time monitoring.", url: "https://bigbelly.com", price: "Paid" },


    // Environment Climate Forecasting AI Tools
    { name: "IBM The Weather Company", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-powered platform providing weather and climate forecasts.", url: "https://www.ibm.com/weather", price: "Paid" },
    { name: "ClimateAI", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-assisted platform predicting climate risks and future scenarios.", url: "https://www.climate.ai", price: "Paid" },
    { name: "Tomorrow.io", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-driven weather and climate forecasting platform for businesses.", url: "https://www.tomorrow.io", price: "Paid" },
    { name: "Earth AI", category: "Environment", subcategory: "Climate Forecasting", desc: "AI platform using satellite data for climate forecasting and risk assessment.", url: "https://www.earth-ai.com", price: "Paid" },
    { name: "Descartes Labs", category: "Environment", subcategory: "Climate Forecasting", desc: "AI-powered platform for environmental and climate prediction.", url: "https://www.descarteslabs.com", price: "Paid" },


    // Environment Water Usage Optimization AI Tools
    { name: "AquaSeca", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-powered platform optimizing water usage in agriculture and cities.", url: "https://www.aquaseca.com", price: "Paid" },
    { name: "Rachio", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-assisted smart irrigation system for efficient water usage.", url: "https://rachio.com", price: "Paid" },
    { name: "CropX", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-driven platform for precision irrigation and soil water optimization.", url: "https://www.cropx.com", price: "Paid" },
    { name: "Echologics", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-powered platform for water distribution optimization and monitoring.", url: "https://www.echologics.com", price: "Paid" },
    { name: "HydroPoint WeatherTRAK", category: "Environment", subcategory: "Water Usage Optimization", desc: "AI-assisted smart irrigation and water management platform.", url: "https://www.hydropoint.com", price: "Paid" },


    // Environment Smart Agriculture AI Tools
    { name: "Taranis", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-powered platform monitoring crops and predicting threats.", url: "https://www.taranis.ag", price: "Paid" },
    { name: "Prospera", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-assisted platform for crop monitoring and precision agriculture.", url: "https://www.prospera.ag", price: "Paid" },
    { name: "FarmWise", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-driven autonomous weeding and crop management platform.", url: "https://www.farmwise.io", price: "Paid" },
    { name: "CropIn", category: "Environment", subcategory: "Smart Agriculture", desc: "AI platform providing data-driven farm management solutions.", url: "https://www.cropin.com", price: "Paid" },
    { name: "Iron Ox", category: "Environment", subcategory: "Smart Agriculture", desc: "AI-assisted robotic farming and smart agriculture solutions.", url: "https://www.ironox.com", price: "Paid" },


    // Environment Traffic Prediction AI Tools
    { name: "INRIX", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-powered platform for traffic analytics and predictive congestion management.", url: "https://www.inrix.com", price: "Paid" },
    { name: "Waycare", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-assisted traffic prediction and smart city mobility platform.", url: "https://www.waycaretech.com", price: "Paid" },
    { name: "Optibus", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-driven public transportation optimization and traffic prediction.", url: "https://www.optibus.com", price: "Paid" },
    { name: "TomTom Traffic AI", category: "Environment", subcategory: "Traffic Prediction", desc: "AI platform predicting traffic congestion and travel times.", url: "https://www.tomtom.com", price: "Paid" },
    { name: "Miovision", category: "Environment", subcategory: "Traffic Prediction", desc: "AI-assisted traffic monitoring and predictive analytics platform.", url: "https://www.miovision.com", price: "Paid" },


    // Environment Urban Planning AI Tools
    { name: "CityFormLab", category: "Environment", subcategory: "Urban Planning AI", desc: "AI-powered platform for urban design and planning simulations.", url: "https://cityform.mit.edu", price: "Free/Paid" },
    { name: "Sidewalk Labs Flow", category: "Environment", subcategory: "Urban Planning AI", desc: "AI-assisted urban planning and infrastructure optimization platform.", url: "https://www.sidewalklabs.com", price: "Paid" },
    { name: "UrbanFootprint", category: "Environment", subcategory: "Urban Planning AI", desc: "AI platform providing urban planning, sustainability, and land use analytics.", url: "https://urbanfootprint.com", price: "Paid" },
    { name: "Spacemaker AI", category: "Environment", subcategory: "Urban Planning AI", desc: "AI-driven tool for optimizing building design and urban layouts.", url: "https://www.spacemakerai.com", price: "Paid" },
    { name: "CityForm Lab Tools", category: "Environment", subcategory: "Urban Planning AI", desc: "AI platform for modeling, simulation, and urban planning insights.", url: "https://cityform.mit.edu/tools", price: "Free/Paid" },


    // Environment Noise Monitoring AI Tools
    { name: "Bruel & Kjaer Noise Monitoring", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-powered platform for real-time noise measurement and analytics.", url: "https://www.bksv.com", price: "Paid" },
    { name: "AcousticAI", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-assisted noise monitoring and environmental sound analysis platform.", url: "https://www.acousticai.com", price: "Paid" },
    { name: "Wavesense", category: "Environment", subcategory: "Noise Monitoring", desc: "AI platform detecting and analyzing environmental noise pollution.", url: "https://wavesense.ai", price: "Paid" },
    { name: "SoundPrint", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-driven app providing real-time noise level monitoring in public spaces.", url: "https://www.soundprint.co", price: "Free/Paid" },
    { name: "NoiseAware", category: "Environment", subcategory: "Noise Monitoring", desc: "AI-powered solution for monitoring and alerting on noise levels.", url: "https://www.noiseaware.io", price: "Paid" },


    // Environment Sustainable Recommendations AI Tools
    { name: "Ecochain", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-powered platform providing sustainability insights for businesses.", url: "https://www.ecochain.com", price: "Paid" },
    { name: "Watershed", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-assisted platform helping companies track emissions and recommend sustainability actions.", url: "https://www.watershed.com", price: "Paid" },
    { name: "Normative", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-driven tool for measuring environmental impact and offering sustainable solutions.", url: "https://www.normative.io", price: "Paid" },
    { name: "Plan A", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI platform providing actionable sustainability recommendations for organizations.", url: "https://plana.earth", price: "Paid" },
    { name: "SustLabs", category: "Environment", subcategory: "Sustainable Recommendations", desc: "AI-assisted sustainability analytics and recommendation platform.", url: "https://sustlabs.com", price: "Paid" },


    // Lifestyle Fitness Planner AI Tools
    { name: "Freeletics", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-powered fitness app creating personalized workout plans.", url: "https://www.freeletics.com", price: "Free/Paid" },
    { name: "Fitbod", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-assisted workout planner adjusting exercises based on user progress.", url: "https://www.fitbod.me", price: "Free/Paid" },
    { name: "Vi Trainer", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-driven personal training app providing adaptive fitness guidance.", url: "https://www.vi.ai", price: "Free/Paid" },
    { name: "Aaptiv Coach", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-powered fitness coaching app with personalized plans.", url: "https://aaptiv.com/coach", price: "Paid" },
    { name: "Trainiac", category: "Lifestyle", subcategory: "Fitness Planner AI", desc: "AI-assisted fitness planner delivering custom workout programs.", url: "https://www.trainiac.fit", price: "Paid" },


    // Lifestyle Meal Planning AI Tools
    { name: "Eat This Much", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-powered meal planning platform creating personalized menus.", url: "https://www.eatthismuch.com", price: "Free/Paid" },
    { name: "PlateJoy", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-assisted meal planning service based on dietary preferences.", url: "https://www.platejoy.com", price: "Paid" },
    { name: "Yummly", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-driven recipe recommendations and meal planning app.", url: "https://www.yummly.com", price: "Free/Paid" },
    { name: "NutriAI", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI platform providing personalized nutrition and meal planning.", url: "https://www.nutri.ai", price: "Paid" },
    { name: "Mealime", category: "Lifestyle", subcategory: "Meal Planning AI", desc: "AI-assisted meal planning app simplifying cooking and grocery lists.", url: "https://www.mealime.com", price: "Free/Paid" },


    // Lifestyle Meditation & Relaxation AI Tools
    { name: "Calm", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-powered app providing guided meditation and relaxation exercises.", url: "https://www.calm.com", price: "Free/Paid" },
    { name: "Headspace", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-assisted meditation platform for mindfulness and stress reduction.", url: "https://www.headspace.com", price: "Free/Paid" },
    { name: "Insight Timer", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-driven meditation app with personalized recommendations.", url: "https://insighttimer.com", price: "Free/Paid" },
    { name: "Muse", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-assisted brain-sensing headband offering guided meditation feedback.", url: "https://choosemuse.com", price: "Paid" },
    { name: "Simple Habit", category: "Lifestyle", subcategory: "Meditation & Relaxation AI", desc: "AI-powered meditation app creating tailored relaxation sessions.", url: "https://www.simplehabit.com", price: "Free/Paid" },


    // Lifestyle Sleep Tracking AI Tools
    { name: "SleepScore", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-powered app analyzing sleep quality and providing recommendations.", url: "https://www.sleepscore.com", price: "Free/Paid" },
    { name: "Oura Ring", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-assisted wearable tracking sleep patterns and health metrics.", url: "https://ouraring.com", price: "Paid" },
    { name: "Sleep Cycle", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-driven sleep tracking app analyzing sleep phases and patterns.", url: "https://www.sleepcycle.com", price: "Free/Paid" },
    { name: "Eight Sleep", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-powered smart mattress tracking sleep and optimizing comfort.", url: "https://www.eightsleep.com", price: "Paid" },
    { name: "Withings Sleep", category: "Lifestyle", subcategory: "Sleep Tracking", desc: "AI-assisted sleep monitoring platform with detailed analytics.", url: "https://www.withings.com/sleep", price: "Paid" },


    // Lifestyle Fashion AI Tools
    { name: "Fashwell", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-powered visual search and fashion recommendation platform.", url: "https://www.fashwell.com", price: "Paid" },
    { name: "Vue.ai", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-assisted fashion personalization and styling recommendations.", url: "https://vue.ai", price: "Paid" },
    { name: "Syte", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI platform for fashion visual search, personalization, and recommendations.", url: "https://www.syte.ai", price: "Paid" },
    { name: "Stitch Fix", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-driven personal styling and fashion subscription service.", url: "https://www.stitchfix.com", price: "Paid" },
    { name: "Fashmates", category: "Lifestyle", subcategory: "Fashion AI", desc: "AI-powered fashion recommendation and outfit planning app.", url: "https://www.fashmates.com", price: "Paid" },


    // Lifestyle Interior Design Suggestions AI Tools
    { name: "Planner 5D", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-powered platform for interior design and virtual room planning.", url: "https://planner5d.com", price: "Free/Paid" },
    { name: "Modsy", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-assisted interior design platform creating realistic room layouts.", url: "https://www.modsy.com", price: "Paid" },
    { name: "Havenly", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-driven interior design consultation and visualization platform.", url: "https://havenly.com", price: "Paid" },
    { name: "RoomGPT", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-powered tool generating interior design ideas from images.", url: "https://roomgpt.io", price: "Free/Paid" },
    { name: "Morpholio Board", category: "Lifestyle", subcategory: "Interior Design Suggestions", desc: "AI-assisted platform for interior mood boards and design suggestions.", url: "https://www.morpholioapps.com/board", price: "Paid" },


    // Lifestyle Gardening AI Tools
    { name: "Plantix", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-powered app for plant disease detection and garden care guidance.", url: "https://plantix.net", price: "Free/Paid" },
    { name: "Garden Answers", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-assisted plant identification and gardening advice platform.", url: "https://www.gardenanswers.com", price: "Free/Paid" },
    { name: "PlantSnap", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-powered plant identification and gardening recommendations app.", url: "https://www.plantsnap.com", price: "Free/Paid" },
    { name: "GrowSmart", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-driven platform for garden monitoring and plant care optimization.", url: "https://www.growsmart.ai", price: "Paid" },
    { name: "AgriApp", category: "Lifestyle", subcategory: "Gardening AI", desc: "AI-assisted platform providing crop and garden management advice.", url: "https://www.agriapp.com", price: "Free/Paid" },


    // Lifestyle Pet Care AI Tools
    { name: "Pawtrack", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-powered GPS tracker and health monitor for cats and pets.", url: "https://pawtrack.com", price: "Paid" },
    { name: "Furbo Dog Camera", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-assisted camera monitoring and treat dispensing for dogs.", url: "https://www.furbo.com", price: "Paid" },
    { name: "PetDesk", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-driven platform for pet health management and appointments.", url: "https://www.petdesk.com", price: "Free/Paid" },
    { name: "Petrics", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-powered pet monitoring and wellness tracking system.", url: "https://www.petrics.com", price: "Paid" },
    { name: "Tractive", category: "Lifestyle", subcategory: "Pet Care AI", desc: "AI-assisted GPS tracker and activity monitoring for pets.", url: "https://tractive.com", price: "Paid" },


    // Lifestyle Event Planning AI Tools
    { name: "Allseated", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-powered platform for event planning, seating, and layout design.", url: "https://www.allseated.com", price: "Paid" },
    { name: "Bizzabo", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-assisted platform for event management and attendee engagement.", url: "https://www.bizzabo.com", price: "Paid" },
    { name: "Gather", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-driven event planning platform for venues and catering management.", url: "https://www.gatherhere.com", price: "Paid" },
    { name: "Social Tables", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-assisted software for event diagramming and planning.", url: "https://www.socialtables.com", price: "Paid" },
    { name: "Hopin", category: "Lifestyle", subcategory: "Event Planning AI", desc: "AI-powered virtual and hybrid event platform for planning and attendee analytics.", url: "https://www.hopin.com", price: "Free/Paid" },


    // Lifestyle Hobby Suggestions AI Tools
    { name: "Replika", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-powered chatbot suggesting hobbies and activities based on your interests.", url: "https://replika.ai", price: "Free/Paid" },
    { name: "Suggester AI", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-assisted platform recommending hobbies and creative pursuits tailored to you.", url: "https://www.suggester.ai", price: "Paid" },
    { name: "Hobbi", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-driven app helping users discover and track hobbies and activities.", url: "https://www.hobbi.com", price: "Free/Paid" },
    { name: "Pixa AI", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI platform suggesting creative hobbies like photography, drawing, and design.", url: "https://www.pixa.ai", price: "Paid" },
    { name: "Skillshare AI Recommendations", category: "Lifestyle", subcategory: "Hobby Suggestions AI", desc: "AI-powered platform recommending courses and hobbies based on user interests.", url: "https://www.skillshare.com", price: "Free/Paid" },


    // Social AI Chat Companions
    { name: "Replika", category: "Social", subcategory: "AI Chat Companions", desc: "AI-powered chatbot providing companionship and conversation.", url: "https://replika.ai", price: "Free/Paid" },
    { name: "Character.ai", category: "Social", subcategory: "AI Chat Companions", desc: "AI platform for chatting with virtual characters and companions.", url: "https://beta.character.ai", price: "Free/Paid" },
    { name: "Woebot", category: "Social", subcategory: "AI Chat Companions", desc: "AI-driven mental health chatbot providing conversational support.", url: "https://woebothealth.com", price: "Free/Paid" },
    { name: "Cai.chat", category: "Social", subcategory: "AI Chat Companions", desc: "AI chatbot platform for personalized social interactions.", url: "https://cai.chat", price: "Paid" },
    { name: "Mitsuku (Kuki)", category: "Social", subcategory: "AI Chat Companions", desc: "Award-winning AI chatbot for conversation and entertainment.", url: "https://www.kuki.ai", price: "Free/Paid" },


    // Social Sentiment Analysis AI Tools
    { name: "Lexalytics", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-powered sentiment and text analytics platform.", url: "https://www.lexalytics.com", price: "Paid" },
    { name: "MonkeyLearn", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-assisted sentiment analysis and text classification platform.", url: "https://monkeylearn.com", price: "Free/Paid" },
    { name: "Brandwatch", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-driven platform analyzing social sentiment and brand perception.", url: "https://www.brandwatch.com", price: "Paid" },
    { name: "Repustate", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-powered text analytics and sentiment detection tool.", url: "https://www.repustate.com", price: "Paid" },
    { name: "SentiStrength", category: "Social", subcategory: "Sentiment Analysis", desc: "AI-assisted tool measuring positive and negative sentiment in text.", url: "http://sentistrength.wlv.ac.uk/", price: "Free/Paid" },


    // Social Content Suggestion AI Tools
    { name: "BuzzSumo", category: "Social", subcategory: "Content Suggestion", desc: "AI-powered platform suggesting trending content ideas.", url: "https://www.buzzsumo.com", price: "Paid" },
    { name: "ContentStudio", category: "Social", subcategory: "Content Suggestion", desc: "AI-assisted content discovery and recommendation platform.", url: "https://www.contentstudio.io", price: "Paid" },
    { name: "Lately.ai", category: "Social", subcategory: "Content Suggestion", desc: "AI-driven content suggestion and repurposing platform.", url: "https://www.lately.ai", price: "Paid" },
    { name: "Curata", category: "Social", subcategory: "Content Suggestion", desc: "AI-powered content curation and recommendation platform.", url: "https://www.curata.com", price: "Paid" },
    { name: "Feedly AI", category: "Social", subcategory: "Content Suggestion", desc: "AI-assisted platform suggesting personalized content feeds.", url: "https://feedly.com", price: "Free/Paid" },


    // Social Social Media Insights AI Tools
    { name: "Hootsuite Insights", category: "Social", subcategory: "Social Media Insights", desc: "AI-powered social media analytics and insights platform.", url: "https://www.hootsuite.com/products/insights", price: "Paid" },
    { name: "Sprout Social", category: "Social", subcategory: "Social Media Insights", desc: "AI-assisted platform providing social media performance analytics.", url: "https://sproutsocial.com", price: "Paid" },
    { name: "Brand24", category: "Social", subcategory: "Social Media Insights", desc: "AI-driven platform for monitoring social media mentions and insights.", url: "https://brand24.com", price: "Paid" },
    { name: "Talkwalker", category: "Social", subcategory: "Social Media Insights", desc: "AI-powered social media analytics and monitoring platform.", url: "https://www.talkwalker.com", price: "Paid" },
    { name: "Zoho Social", category: "Social", subcategory: "Social Media Insights", desc: "AI-assisted social media analytics platform providing actionable insights.", url: "https://www.zoho.com/social", price: "Free/Paid" },


    // Social Trend Detection AI Tools
    { name: "TrendSpottr", category: "Social", subcategory: "Trend Detection", desc: "AI-powered platform detecting emerging trends and influencers.", url: "https://www.trendspottr.com", price: "Paid" },
    { name: "Google Trends", category: "Social", subcategory: "Trend Detection", desc: "AI-assisted tool for identifying trending topics and searches.", url: "https://trends.google.com", price: "Free" },
    { name: "Exploding Topics", category: "Social", subcategory: "Trend Detection", desc: "AI-driven platform identifying rapidly growing trends.", url: "https://explodingtopics.com", price: "Free/Paid" },
    { name: "BuzzSumo", category: "Social", subcategory: "Trend Detection", desc: "AI-assisted tool for discovering trending content and topics.", url: "https://www.buzzsumo.com", price: "Paid" },
    { name: "Trendalytics", category: "Social", subcategory: "Trend Detection", desc: "AI-powered consumer trend prediction and analytics platform.", url: "https://www.trendalytics.co", price: "Paid" },


    // Social Influencer Analytics AI Tools
    { name: "Heepsy", category: "Social", subcategory: "Influencer Analytics", desc: "AI-powered platform for finding and analyzing social media influencers.", url: "https://www.heepsy.com", price: "Paid" },
    { name: "Upfluence", category: "Social", subcategory: "Influencer Analytics", desc: "AI-assisted influencer analytics and marketing platform.", url: "https://www.upfluence.com", price: "Paid" },
    { name: "HypeAuditor", category: "Social", subcategory: "Influencer Analytics", desc: "AI-driven tool providing influencer performance and authenticity metrics.", url: "https://hypeauditor.com", price: "Paid" },
    { name: "Klear", category: "Social", subcategory: "Influencer Analytics", desc: "AI-powered platform for influencer identification and analytics.", url: "https://klear.com", price: "Paid" },
    { name: "CreatorIQ", category: "Social", subcategory: "Influencer Analytics", desc: "AI-assisted influencer marketing and analytics platform.", url: "https://www.creatoriQ.com", price: "Paid" },


    // Social Engagement Optimization AI Tools
    { name: "Socialbakers", category: "Social", subcategory: "Engagement Optimization", desc: "AI-powered platform optimizing social media engagement and content strategy.", url: "https://www.socialbakers.com", price: "Paid" },
    { name: "Lately.ai", category: "Social", subcategory: "Engagement Optimization", desc: "AI-assisted tool for automating social media posts and maximizing engagement.", url: "https://www.lately.ai", price: "Paid" },
    { name: "Sprinklr", category: "Social", subcategory: "Engagement Optimization", desc: "AI-driven social media engagement and marketing platform.", url: "https://www.sprinklr.com", price: "Paid" },
    { name: "Buffer Analyze", category: "Social", subcategory: "Engagement Optimization", desc: "AI-assisted analytics tool for optimizing social media engagement.", url: "https://buffer.com/analyze", price: "Paid" },
    { name: "HubSpot Social Tools", category: "Social", subcategory: "Engagement Optimization", desc: "AI-powered platform for social media scheduling and engagement optimization.", url: "https://www.hubspot.com/products/marketing/social", price: "Free/Paid" },


    // Social Hashtag Suggestions AI Tools
    { name: "RiteTag", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-powered tool suggesting trending hashtags for social media posts.", url: "https://ritetag.com", price: "Paid" },
    { name: "Hashtagify", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-assisted platform for discovering and analyzing hashtags.", url: "https://hashtagify.me", price: "Free/Paid" },
    { name: "All Hashtag", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-driven tool generating optimized hashtags for social media content.", url: "https://www.all-hashtag.com", price: "Free/Paid" },
    { name: "Seekmetrics", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-powered hashtag generator and analytics platform.", url: "https://seekmetrics.com/hashtag-generator", price: "Free" },
    { name: "Inflact Hashtag Generator", category: "Social", subcategory: "Hashtag Suggestions", desc: "AI-assisted platform generating relevant hashtags for social campaigns.", url: "https://inflact.com/tools/instagram-hashtag-generator/", price: "Paid" },


    // Social Community Monitoring AI Tools
    { name: "Mention", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-powered platform for monitoring brand mentions and community conversations.", url: "https://mention.com", price: "Paid" },
    { name: "Brandwatch", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-assisted tool analyzing online communities and social media activity.", url: "https://www.brandwatch.com", price: "Paid" },
    { name: "Talkwalker", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-driven platform for social listening and community insights.", url: "https://www.talkwalker.com", price: "Paid" },
    { name: "Awario", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-powered social listening tool for monitoring communities and mentions.", url: "https://awario.com", price: "Paid" },
    { name: "Keyhole", category: "Social", subcategory: "Community Monitoring AI", desc: "AI-assisted platform monitoring hashtags, mentions, and social communities.", url: "https://keyhole.co", price: "Paid" },


    // Social Event Promotion AI Tools
    { name: "Eventbrite", category: "Social", subcategory: "Event Promotion AI", desc: "AI-powered platform promoting events and optimizing ticket sales.", url: "https://www.eventbrite.com", price: "Free/Paid" },
    { name: "Hopin", category: "Social", subcategory: "Event Promotion AI", desc: "AI-assisted virtual event platform for promotion and attendee engagement.", url: "https://www.hopin.com", price: "Free/Paid" },
    { name: "Splash", category: "Social", subcategory: "Event Promotion AI", desc: "AI-driven platform for event marketing, promotion, and analytics.", url: "https://splashthat.com", price: "Paid" },
    { name: "Bizzabo", category: "Social", subcategory: "Event Promotion AI", desc: "AI-powered event management platform for promotion and audience targeting.", url: "https://www.bizzabo.com", price: "Paid" },
    { name: "Cvent", category: "Social", subcategory: "Event Promotion AI", desc: "AI-assisted platform for event promotion, registration, and analytics.", url: "https://www.cvent.com", price: "Paid" },


    // Travel AI Trip Planner
    { name: "Utrip", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-powered trip planning platform creating personalized travel itineraries.", url: "https://www.utrip.com", price: "Free/Paid" },
    { name: "Roam Around", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-assisted platform suggesting personalized travel plans and destinations.", url: "https://www.roamaround.io", price: "Paid" },
    { name: "Sygic Travel", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-driven trip planner creating custom travel itineraries with maps.", url: "https://travel.sygic.com", price: "Free/Paid" },
    { name: "TripHobo", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-powered platform generating travel itineraries with optimized schedules.", url: "https://www.triphobo.com", price: "Free/Paid" },
    { name: "Journy", category: "Travel", subcategory: "AI Trip Planner", desc: "AI-assisted travel planning service offering curated itineraries.", url: "https://www.gojourny.com", price: "Paid" },


    // Travel Flight Price Prediction AI Tools
    { name: "Hopper", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-powered app predicting the best flight prices and booking times.", url: "https://www.hopper.com", price: "Free/Paid" },
    { name: "Google Flights", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-assisted flight search predicting price trends and alerts.", url: "https://www.google.com/flights", price: "Free" },
    { name: "Kayak", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-driven platform predicting flight price changes and deals.", url: "https://www.kayak.com", price: "Free/Paid" },
    { name: "Skyscanner", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-powered flight search predicting price drops and best booking times.", url: "https://www.skyscanner.com", price: "Free/Paid" },
    { name: "Priceline", category: "Travel", subcategory: "Flight Price Prediction", desc: "AI-assisted platform providing flight price predictions and deals.", url: "https://www.priceline.com", price: "Free/Paid" },


    // Travel Hotel Recommendations AI Tools
    { name: "Booking.com AI Recommendations", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-powered hotel recommendations based on preferences and past bookings.", url: "https://www.booking.com", price: "Free/Paid" },
    { name: "Expedia", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-assisted platform suggesting hotels and accommodations.", url: "https://www.expedia.com", price: "Free/Paid" },
    { name: "Tripadvisor", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-driven hotel suggestion engine based on reviews and preferences.", url: "https://www.tripadvisor.com", price: "Free/Paid" },
    { name: "Hotels.com", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-powered platform recommending hotels tailored to user preferences.", url: "https://www.hotels.com", price: "Free/Paid" },
    { name: "Trivago", category: "Travel", subcategory: "Hotel Recommendations", desc: "AI-assisted hotel search and recommendation engine.", url: "https://www.trivago.com", price: "Free/Paid" },


    // Travel Itinerary Generation AI Tools
    { name: "TripIt", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-powered app automatically generating travel itineraries from bookings.", url: "https://www.tripit.com", price: "Free/Paid" },
    { name: "Utrip", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-assisted platform creating optimized travel itineraries.", url: "https://www.utrip.com", price: "Free/Paid" },
    { name: "Sygic Travel", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-driven platform generating custom itineraries with maps and schedules.", url: "https://travel.sygic.com", price: "Free/Paid" },
    { name: "TripHobo", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-powered platform generating personalized trip plans.", url: "https://www.triphobo.com", price: "Free/Paid" },
    { name: "Kayak Trip Huddle", category: "Travel", subcategory: "Itinerary Generation", desc: "AI-assisted group itinerary planning tool.", url: "https://www.kayak.com/triphuddle", price: "Free/Paid" },


    // Travel Language Translation AI Tools
    { name: "Google Translate", category: "Travel", subcategory: "Language Translation", desc: "AI-powered translation platform for text, speech, and images.", url: "https://translate.google.com", price: "Free" },
    { name: "DeepL", category: "Travel", subcategory: "Language Translation", desc: "AI-assisted translation tool for accurate multilingual communication.", url: "https://www.deepl.com", price: "Free/Paid" },
    { name: "iTranslate", category: "Travel", subcategory: "Language Translation", desc: "AI-driven language translation app for travelers.", url: "https://www.itranslate.com", price: "Free/Paid" },
    { name: "Microsoft Translator", category: "Travel", subcategory: "Language Translation", desc: "AI-powered translation platform supporting multiple languages.", url: "https://www.microsoft.com/translator", price: "Free/Paid" },
    { name: "SayHi Translate", category: "Travel", subcategory: "Language Translation", desc: "AI-assisted app translating speech and text in real-time.", url: "https://www.sayhitranslate.com", price: "Free/Paid" },


    // Travel Local Experience Suggestions AI Tools
    { name: "Detour", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-powered platform offering immersive local audio tours and experiences.", url: "https://www.detour.com", price: "Paid" },
    { name: "GuidiGO", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-assisted platform providing guided tours and local experiences.", url: "https://www.guidigo.com", price: "Paid" },
    { name: "LikeALocal", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-driven app suggesting local hidden gems and experiences.", url: "https://www.likealocal.com", price: "Free/Paid" },
    { name: "Spotted by Locals", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-powered recommendations for authentic local experiences.", url: "https://www.spottedbylocals.com", price: "Paid" },
    { name: "Journy", category: "Travel", subcategory: "Local Experience Suggestions", desc: "AI-assisted travel platform curating unique local experiences.", url: "https://www.gojourny.com", price: "Paid" },


    // Travel Travel Chatbots AI Tools
    { name: "Mezi (American Express)", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-powered travel assistant chatbot for booking and recommendations.", url: "https://www.amextravel.com", price: "Free/Paid" },
    { name: "Pana", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-assisted corporate travel chatbot managing itineraries and bookings.", url: "https://www.pana.com", price: "Paid" },
    { name: "HelloGbye", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-powered chatbot for automated travel booking and planning.", url: "https://www.hellogbye.com", price: "Paid" },
    { name: "Skyscanner Bot", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-driven chatbot assisting with flight and hotel searches.", url: "https://www.skyscanner.com/bot", price: "Free/Paid" },
    { name: "Expedia Virtual Agent", category: "Travel", subcategory: "Travel Chatbots", desc: "AI-powered chatbot for booking, support, and travel recommendations.", url: "https://www.expedia.com/service/", price: "Free/Paid" },


    // Travel Route Optimization AI Tools
    { name: "Rome2rio", category: "Travel", subcategory: "Route Optimization", desc: "AI-powered platform optimizing travel routes using multiple transport modes.", url: "https://www.rome2rio.com", price: "Free/Paid" },
    { name: "Google Maps", category: "Travel", subcategory: "Route Optimization", desc: "AI-assisted map platform providing optimized routes and traffic predictions.", url: "https://maps.google.com", price: "Free" },
    { name: "Waze", category: "Travel", subcategory: "Route Optimization", desc: "AI-driven navigation app optimizing routes with real-time traffic data.", url: "https://www.waze.com", price: "Free" },
    { name: "Route4Me", category: "Travel", subcategory: "Route Optimization", desc: "AI-powered route planning and optimization platform for travelers and delivery.", url: "https://www.route4me.com", price: "Paid" },
    { name: "Circuit Route Planner", category: "Travel", subcategory: "Route Optimization", desc: "AI-assisted route optimization app for multiple stops and efficient travel.", url: "https://getcircuit.com/route-planner", price: "Free/Paid" },


    // Travel Tourist Guide AI Tools
    { name: "GuidiGO", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-powered interactive tourist guide with personalized tours.", url: "https://www.guidigo.com", price: "Paid" },
    { name: "Detour", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-assisted immersive audio tours guiding tourists through cities.", url: "https://www.detour.com", price: "Paid" },
    { name: "TripScout", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-driven travel guide app providing curated city tours and tips.", url: "https://www.tripscout.co", price: "Free/Paid" },
    { name: "Tourpal", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-powered mobile guide offering personalized tourist routes.", url: "https://www.tourpal.com", price: "Paid" },
    { name: "PocketGuide", category: "Travel", subcategory: "Tourist Guide AI", desc: "AI-assisted audio guide app providing personalized tours worldwide.", url: "https://www.pocketguideapp.com", price: "Free/Paid" },


    // Travel Expense Management AI Tools
    { name: "Trail Wallet", category: "Travel", subcategory: "Expense Management AI", desc: "AI-powered travel expense tracker helping manage budgets on trips.", url: "https://www.trailwalletapp.com", price: "Paid" },
    { name: "Splitwise", category: "Travel", subcategory: "Expense Management AI", desc: "AI-assisted app for tracking shared travel expenses among groups.", url: "https://www.splitwise.com", price: "Free/Paid" },
    { name: "TravelBank", category: "Travel", subcategory: "Expense Management AI", desc: "AI-driven travel expense management platform for budgeting and reporting.", url: "https://www.travelbank.com", price: "Free/Paid" },
    { name: "Expensify", category: "Travel", subcategory: "Expense Management AI", desc: "AI-powered expense tracking and reporting tool for travelers.", url: "https://www.expensify.com", price: "Free/Paid" },
    { name: "Tripcoin", category: "Travel", subcategory: "Expense Management AI", desc: "AI-assisted app for tracking travel costs and optimizing budgets.", url: "https://www.tripcoin.com", price: "Paid" },


    // Personal Assistant Voice Assistants AI Tools
    { name: "Google Assistant", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-powered voice assistant for search, tasks, and smart home control.", url: "https://assistant.google.com", price: "Free" },
    { name: "Amazon Alexa", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-assisted voice assistant for smart devices, reminders, and skills.", url: "https://www.amazon.com/alexa", price: "Free/Paid" },
    { name: "Apple Siri", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-powered voice assistant integrated into Apple devices for tasks and queries.", url: "https://www.apple.com/siri", price: "Free" },
    { name: "Microsoft Cortana", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "AI-assisted voice assistant for Windows devices and productivity.", url: "https://www.microsoft.com/cortana", price: "Free/Paid" },
    { name: "Mycroft AI", category: "PersonalAssistant", subcategory: "Voice Assistants", desc: "Open-source AI voice assistant for smart home and personal tasks.", url: "https://mycroft.ai", price: "Free/Paid" },


    // Personal Assistant Reminder AI Tools
    { name: "Todoist", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-powered task and reminder app for managing personal and work tasks.", url: "https://todoist.com", price: "Free/Paid" },
    { name: "Microsoft To Do", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-assisted app for task management and smart reminders.", url: "https://to-do.microsoft.com", price: "Free" },
    { name: "Any.do", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-driven task and reminder app syncing across devices.", url: "https://www.any.do", price: "Free/Paid" },
    { name: "Google Keep", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-powered note and reminder app integrated with Google services.", url: "https://keep.google.com", price: "Free" },
    { name: "Remember The Milk", category: "PersonalAssistant", subcategory: "Reminder AI", desc: "AI-assisted task manager and reminder app for personal productivity.", url: "https://www.rememberthemilk.com", price: "Free/Paid" },


    // Personal Assistant Task Management AI Tools
    { name: "ClickUp", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-powered task and project management platform.", url: "https://clickup.com", price: "Free/Paid" },
    { name: "Asana", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-assisted task management tool for teams and individuals.", url: "https://asana.com", price: "Free/Paid" },
    { name: "Trello", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-powered task organization platform with boards and automation.", url: "https://trello.com", price: "Free/Paid" },
    { name: "Notion AI", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-assisted all-in-one workspace for task tracking and notes.", url: "https://www.notion.so/product/ai", price: "Free/Paid" },
    { name: "Monday.com", category: "PersonalAssistant", subcategory: "Task Management", desc: "AI-powered task and project management platform for teams.", url: "https://monday.com", price: "Paid" },


    // Personal Assistant Email Drafting AI Tools
    { name: "Grammarly", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-powered tool for drafting, improving, and correcting emails.", url: "https://www.grammarly.com", price: "Free/Paid" },
    { name: "Lavender", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-assisted platform optimizing email writing and personalization.", url: "https://www.lavender.ai", price: "Paid" },
    { name: "Flowrite", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-driven email and message drafting assistant.", url: "https://www.flowrite.com", price: "Paid" },
    { name: "WriteSonic", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-powered tool for creating professional email content quickly.", url: "https://writesonic.com", price: "Free/Paid" },
    { name: "Copy.ai", category: "PersonalAssistant", subcategory: "Email Drafting", desc: "AI-assisted email and content writing platform.", url: "https://www.copy.ai", price: "Free/Paid" },


    // Personal Assistant Scheduling AI Tools
    { name: "Calendly", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-powered scheduling tool automating meeting and appointment bookings.", url: "https://calendly.com", price: "Free/Paid" },
    { name: "x.ai", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-assisted scheduling platform for automating meeting coordination.", url: "https://x.ai", price: "Paid" },
    { name: "Clara", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-powered virtual assistant for scheduling meetings and appointments.", url: "https://claralabs.com", price: "Paid" },
    { name: "Reclaim.ai", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-assisted tool optimizing calendar schedules automatically.", url: "https://reclaim.ai", price: "Free/Paid" },
    { name: "Woven (by Slack)", category: "PersonalAssistant", subcategory: "Scheduling", desc: "AI-powered calendar and scheduling tool for productivity.", url: "https://woven.com", price: "Paid" },


    // Personal Assistant Calendar Optimization AI Tools
    { name: "Clockwise", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-powered tool for optimizing calendar schedules and meeting times.", url: "https://www.getclockwise.com", price: "Free/Paid" },
    { name: "Reclaim.ai", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-assisted platform automatically organizing tasks and events in your calendar.", url: "https://reclaim.ai", price: "Free/Paid" },
    { name: "Woven (by Slack)", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-driven calendar assistant for smart scheduling and optimization.", url: "https://woven.com", price: "Paid" },
    { name: "TimeHero", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-powered tool optimizing time allocation and calendar planning.", url: "https://www.timehero.com", price: "Paid" },
    { name: "Skedpal", category: "PersonalAssistant", subcategory: "Calendar Optimization", desc: "AI-assisted calendar and task planning tool for maximizing productivity.", url: "https://www.skedpal.com", price: "Paid" },


    // Personal Assistant Meeting Summaries AI Tools
    { name: "Otter.ai", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-powered tool for recording and summarizing meetings.", url: "https://otter.ai", price: "Free/Paid" },
    { name: "Fireflies.ai", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-assisted platform capturing and summarizing meeting notes.", url: "https://www.fireflies.ai", price: "Free/Paid" },
    { name: "Fathom", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-driven meeting assistant for transcription and highlights.", url: "https://fathom.video", price: "Free/Paid" },
    { name: "Avoma", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-powered platform summarizing meetings and providing actionable insights.", url: "https://www.avoma.com", price: "Free/Paid" },
    { name: "MeetGeek", category: "PersonalAssistant", subcategory: "Meeting Summaries", desc: "AI-assisted tool automatically recording and summarizing meetings.", url: "https://meetgeek.ai", price: "Paid" },


    // Personal Assistant Habit Tracking AI Tools
    { name: "Fabulous", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-powered app for building healthy habits and daily routines.", url: "https://www.thefabulous.co", price: "Free/Paid" },
    { name: "Streaks", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-assisted habit tracker for personal productivity and routines.", url: "https://streaksapp.com", price: "Paid" },
    { name: "Habitica", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-driven gamified habit tracker for motivation and accountability.", url: "https://habitica.com", price: "Free/Paid" },
    { name: "Loop Habit Tracker", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-powered habit tracking app providing analytics and reminders.", url: "https://loophabittracker.com", price: "Free" },
    { name: "Way of Life", category: "PersonalAssistant", subcategory: "Habit Tracking", desc: "AI-assisted app helping users track habits and behavioral patterns.", url: "https://wayoflifeapp.com", price: "Paid" },


    // Personal Assistant Personal Insights AI Tools
    { name: "Youper", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-powered emotional health assistant providing insights and self-reflection.", url: "https://www.youper.ai", price: "Free/Paid" },
    { name: "Reflectly", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-assisted journaling app providing personal insights and mood tracking.", url: "https://reflectly.app", price: "Free/Paid" },
    { name: "Moodfit", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-driven platform analyzing mental health and daily habits.", url: "https://www.getmoodfit.com", price: "Free/Paid" },
    { name: "Daylio", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-assisted mood tracker and journal generating personal insights.", url: "https://daylio.net", price: "Free/Paid" },
    { name: "Foresight AI", category: "PersonalAssistant", subcategory: "Personal Insights", desc: "AI-powered tool providing personal and productivity insights based on habits.", url: "https://www.foresight.ai", price: "Paid" },


    // Personal Assistant AI Concierge Tools
    { name: "x.ai", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-powered virtual assistant for scheduling, planning, and concierge tasks.", url: "https://x.ai", price: "Paid" },
    { name: "Magic", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-assisted platform providing personal concierge services on demand.", url: "https://www.getmagic.com", price: "Paid" },
    { name: "Fin", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-powered virtual assistant handling personal and professional tasks.", url: "https://www.fin.com", price: "Paid" },
    { name: "Clara", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-driven concierge assistant managing meetings, tasks, and communications.", url: "https://claralabs.com", price: "Paid" },
    { name: "Trevor AI", category: "PersonalAssistant", subcategory: "AI Concierge", desc: "AI-powered personal assistant helping with planning and task execution.", url: "https://trevorai.com", price: "Free/Paid" },


    // Presentation Slide Generation AI Tools
    { name: "Beautiful.ai", category: "Presentation", subcategory: "Slide Generation", desc: "AI-powered platform automatically generating professional slides.", url: "https://www.beautiful.ai", price: "Free/Paid" },
    { name: "Tome", category: "Presentation", subcategory: "Slide Generation", desc: "AI-assisted tool for generating story-driven slides quickly.", url: "https://tome.app", price: "Free/Paid" },
    { name: "Decktopus", category: "Presentation", subcategory: "Slide Generation", desc: "AI-powered slide generation platform with smart content suggestions.", url: "https://www.decktopus.com", price: "Free/Paid" },
    { name: "Designs.ai SlideMaker", category: "Presentation", subcategory: "Slide Generation", desc: "AI-assisted tool creating slides from text or scripts.", url: "https://designs.ai/tools/slidemaker", price: "Paid" },
    { name: "Slidebean", category: "Presentation", subcategory: "Slide Generation", desc: "AI-driven platform generating slides and pitch decks automatically.", url: "https://slidebean.com", price: "Free/Paid" },


    // Presentation Design Templates AI Tools
    { name: "Canva", category: "Presentation", subcategory: "Design Templates", desc: "AI-powered platform offering customizable design templates for presentations.", url: "https://www.canva.com", price: "Free/Paid" },
    { name: "Visme", category: "Presentation", subcategory: "Design Templates", desc: "AI-assisted presentation tool with professional design templates.", url: "https://www.visme.co", price: "Free/Paid" },
    { name: "Crello", category: "Presentation", subcategory: "Design Templates", desc: "AI-powered platform offering a wide variety of presentation templates.", url: "https://crello.com", price: "Free/Paid" },
    { name: "Slidesgo", category: "Presentation", subcategory: "Design Templates", desc: "AI-assisted platform providing free and premium slide templates.", url: "https://slidesgo.com", price: "Free/Paid" },
    { name: "Emaze", category: "Presentation", subcategory: "Design Templates", desc: "AI-driven tool with ready-made presentation templates.", url: "https://www.emaze.com", price: "Free/Paid" },


    // Presentation AI Pitch Decks Tools
    { name: "Slidebean", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-powered platform generating startup pitch decks automatically.", url: "https://slidebean.com", price: "Free/Paid" },
    { name: "Pitch.com", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-assisted platform for collaborative pitch deck creation.", url: "https://pitch.com", price: "Free/Paid" },
    { name: "Tome", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-driven tool for designing engaging pitch decks and presentations.", url: "https://tome.app", price: "Free/Paid" },
    { name: "Decktopus", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-powered pitch deck generator for startups and businesses.", url: "https://www.decktopus.com", price: "Free/Paid" },
    { name: "Visme", category: "Presentation", subcategory: "AI Pitch Decks", desc: "AI-assisted platform creating professional pitch decks quickly.", url: "https://www.visme.co", price: "Free/Paid" },


    // Presentation Infographics AI Tools
    { name: "Venngage", category: "Presentation", subcategory: "Infographics", desc: "AI-powered platform creating professional infographics easily.", url: "https://venngage.com", price: "Free/Paid" },
    { name: "Piktochart", category: "Presentation", subcategory: "Infographics", desc: "AI-assisted infographic creation platform with templates.", url: "https://piktochart.com", price: "Free/Paid" },
    { name: "Canva", category: "Presentation", subcategory: "Infographics", desc: "AI-driven platform for designing infographics and visuals.", url: "https://www.canva.com", price: "Free/Paid" },
    { name: "Easel.ly", category: "Presentation", subcategory: "Infographics", desc: "AI-assisted tool for creating and sharing infographics.", url: "https://www.easel.ly", price: "Free/Paid" },
    { name: "Visme", category: "Presentation", subcategory: "Infographics", desc: "AI-powered platform for making infographics, charts, and visuals.", url: "https://www.visme.co", price: "Free/Paid" },


    // Presentation Data Visualization AI Tools
    { name: "Tableau", category: "Presentation", subcategory: "Data Visualization", desc: "AI-powered data visualization platform for insights and analytics.", url: "https://www.tableau.com", price: "Paid" },
    { name: "Power BI", category: "Presentation", subcategory: "Data Visualization", desc: "AI-assisted tool for creating interactive data dashboards.", url: "https://powerbi.microsoft.com", price: "Paid" },
    { name: "Zoho Analytics", category: "Presentation", subcategory: "Data Visualization", desc: "AI-driven platform for visualizing and analyzing data.", url: "https://www.zoho.com/analytics", price: "Free/Paid" },
    { name: "Infogram", category: "Presentation", subcategory: "Data Visualization", desc: "AI-assisted tool for creating charts, graphs, and dashboards.", url: "https://infogram.com", price: "Free/Paid" },
    { name: "Google Data Studio", category: "Presentation", subcategory: "Data Visualization", desc: "AI-powered tool for building interactive reports and visualizations.", url: "https://datastudio.google.com", price: "Free" },


    // Presentation Content Summarization AI Tools
    { name: "ChatGPT", category: "Presentation", subcategory: "Content Summarization", desc: "AI-powered tool for summarizing content and generating concise points.", url: "https://chat.openai.com", price: "Free/Paid" },
    { name: "QuillBot", category: "Presentation", subcategory: "Content Summarization", desc: "AI-assisted platform for summarizing text and creating bullet points.", url: "https://quillbot.com", price: "Free/Paid" },
    { name: "SMMRY", category: "Presentation", subcategory: "Content Summarization", desc: "AI-driven tool for condensing text into key points and summaries.", url: "https://smmry.com", price: "Free" },
    { name: "Resoomer", category: "Presentation", subcategory: "Content Summarization", desc: "AI-powered text summarization tool for articles and reports.", url: "https://resoomer.com", price: "Free/Paid" },
    { name: "Scholarcy", category: "Presentation", subcategory: "Content Summarization", desc: "AI-assisted platform summarizing research papers and documents.", url: "https://www.scholarcy.com", price: "Paid" },


    // Presentation Image / Diagram Creation AI Tools
    { name: "Canva", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-powered platform for creating diagrams, images, and visuals.", url: "https://www.canva.com", price: "Free/Paid" },
    { name: "Visme", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-assisted tool for generating diagrams and visual content.", url: "https://www.visme.co", price: "Free/Paid" },
    { name: "Lucidchart", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-driven platform for diagrams, flowcharts, and visuals.", url: "https://www.lucidchart.com", price: "Free/Paid" },
    { name: "Draw.io", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-assisted diagram creation tool for charts and visuals.", url: "https://app.diagrams.net", price: "Free" },
    { name: "MindMeister", category: "Presentation", subcategory: "Image / Diagram Creation", desc: "AI-powered mind mapping and diagram tool for presentations.", url: "https://www.mindmeister.com", price: "Free/Paid" },


    // Presentation Chart Generation AI Tools
    { name: "Infogram", category: "Presentation", subcategory: "Chart Generation", desc: "AI-powered tool to create charts, graphs, and infographics.", url: "https://infogram.com", price: "Free/Paid" },
    { name: "Tableau", category: "Presentation", subcategory: "Chart Generation", desc: "AI-assisted platform for creating interactive and visual charts.", url: "https://www.tableau.com", price: "Paid" },
    { name: "Microsoft Power BI", category: "Presentation", subcategory: "Chart Generation", desc: "AI-driven data visualization tool with advanced charting features.", url: "https://powerbi.microsoft.com", price: "Paid" },
    { name: "Google Data Studio", category: "Presentation", subcategory: "Chart Generation", desc: "AI-powered tool for creating dynamic charts and reports.", url: "https://datastudio.google.com", price: "Free" },
    { name: "ChartBlocks", category: "Presentation", subcategory: "Chart Generation", desc: "AI-assisted platform for building custom charts quickly.", url: "https://www.chartblocks.com", price: "Free/Paid" },


    // Presentation Animations AI Tools
    { name: "Powtoon", category: "Presentation", subcategory: "Animations", desc: "AI-powered tool for creating animated presentations and videos.", url: "https://www.powtoon.com", price: "Free/Paid" },
    { name: "Vyond", category: "Presentation", subcategory: "Animations", desc: "AI-assisted platform for professional animated presentations.", url: "https://www.vyond.com", price: "Paid" },
    { name: "Animaker", category: "Presentation", subcategory: "Animations", desc: "AI-driven tool for building animated videos and slides.", url: "https://www.animaker.com", price: "Free/Paid" },
    { name: "Renderforest", category: "Presentation", subcategory: "Animations", desc: "AI-powered animation and video creation platform.", url: "https://www.renderforest.com", price: "Free/Paid" },
    { name: "Moovly", category: "Presentation", subcategory: "Animations", desc: "AI-assisted tool for creating animated content and presentations.", url: "https://www.moovly.com", price: "Free/Paid" },


    // Presentation Speaker Notes Assistance AI Tools
    { name: "Tome", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-powered tool generating speaker notes from slides automatically.", url: "https://tome.app", price: "Free/Paid" },
    { name: "Beautiful.ai", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-assisted platform providing smart speaker notes for slides.", url: "https://www.beautiful.ai", price: "Free/Paid" },
    { name: "Slidebean", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-powered presentation tool generating speaker notes and cues.", url: "https://slidebean.com", price: "Free/Paid" },
    { name: "Microsoft PowerPoint AI", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-driven PowerPoint feature suggesting speaker notes and talking points.", url: "https://www.microsoft.com/microsoft-365/powerpoint", price: "Paid" },
    { name: "Copy.ai", category: "Presentation", subcategory: "Speaker Notes Assistance", desc: "AI-assisted tool generating slide notes and content suggestions.", url: "https://www.copy.ai", price: "Free/Paid" },


    // Automation Task Automation AI Tools
    { name: "Zapier", category: "Automation", subcategory: "Task Automation", desc: "AI-powered platform automating repetitive tasks across apps.", url: "https://zapier.com", price: "Free/Paid" },
    { name: "IFTTT", category: "Automation", subcategory: "Task Automation", desc: "AI-assisted tool connecting apps and automating workflows.", url: "https://ifttt.com", price: "Free/Paid" },
    { name: "Microsoft Power Automate", category: "Automation", subcategory: "Task Automation", desc: "AI-driven platform for automating tasks and processes.", url: "https://flow.microsoft.com", price: "Free/Paid" },
    { name: "Integromat (Make)", category: "Automation", subcategory: "Task Automation", desc: "AI-assisted workflow automation platform connecting apps and services.", url: "https://www.make.com", price: "Free/Paid" },
    { name: "Automate.io", category: "Automation", subcategory: "Task Automation", desc: "AI-powered tool for automating repetitive tasks and workflows.", url: "https://automate.io", price: "Free/Paid" },


    // Automation Workflow Automation AI Tools
    { name: "Monday.com", category: "Automation", subcategory: "Workflow Automation", desc: "AI-assisted workflow automation platform for teams.", url: "https://monday.com", price: "Paid" },
    { name: "Trello", category: "Automation", subcategory: "Workflow Automation", desc: "AI-powered workflow automation and project management tool.", url: "https://trello.com", price: "Free/Paid" },
    { name: "Asana", category: "Automation", subcategory: "Workflow Automation", desc: "AI-driven platform for automating team workflows and tasks.", url: "https://asana.com", price: "Free/Paid" },
    { name: "Kissflow", category: "Automation", subcategory: "Workflow Automation", desc: "AI-powered workflow automation software for businesses.", url: "https://kissflow.com", price: "Paid" },
    { name: "Process Street", category: "Automation", subcategory: "Workflow Automation", desc: "AI-assisted tool for automating workflows and checklists.", url: "https://www.process.st", price: "Free/Paid" },


    // Automation Email Automation AI Tools
    { name: "Mailchimp", category: "Automation", subcategory: "Email Automation", desc: "AI-powered email marketing and automation platform.", url: "https://mailchimp.com", price: "Free/Paid" },
    { name: "Sendinblue", category: "Automation", subcategory: "Email Automation", desc: "AI-assisted platform for automated email campaigns.", url: "https://www.sendinblue.com", price: "Free/Paid" },
    { name: "HubSpot", category: "Automation", subcategory: "Email Automation", desc: "AI-driven email automation and CRM platform.", url: "https://www.hubspot.com", price: "Free/Paid" },
    { name: "ActiveCampaign", category: "Automation", subcategory: "Email Automation", desc: "AI-assisted platform for email marketing automation and segmentation.", url: "https://www.activecampaign.com", price: "Paid" },
    { name: "GetResponse", category: "Automation", subcategory: "Email Automation", desc: "AI-powered email automation and marketing platform.", url: "https://www.getresponse.com", price: "Free/Paid" },


    // Automation Marketing Automation AI Tools
    { name: "HubSpot", category: "Automation", subcategory: "Marketing Automation", desc: "AI-powered marketing automation and CRM platform.", url: "https://www.hubspot.com", price: "Free/Paid" },
    { name: "Marketo", category: "Automation", subcategory: "Marketing Automation", desc: "AI-assisted platform for marketing automation and analytics.", url: "https://www.marketo.com", price: "Paid" },
    { name: "ActiveCampaign", category: "Automation", subcategory: "Marketing Automation", desc: "AI-driven marketing automation platform with email and sales tools.", url: "https://www.activecampaign.com", price: "Paid" },
    { name: "Pardot", category: "Automation", subcategory: "Marketing Automation", desc: "AI-powered marketing automation solution for B2B businesses.", url: "https://www.salesforce.com/products/pardot", price: "Paid" },
    { name: "Omnisend", category: "Automation", subcategory: "Marketing Automation", desc: "AI-assisted platform for automated email, SMS, and marketing campaigns.", url: "https://www.omnisend.com", price: "Free/Paid" },


    // Automation Process Optimization AI Tools
    { name: "Celonis", category: "Automation", subcategory: "Process Optimization", desc: "AI-powered process mining and optimization platform.", url: "https://www.celonis.com", price: "Paid" },
    { name: "Signavio", category: "Automation", subcategory: "Process Optimization", desc: "AI-assisted process management and optimization tool.", url: "https://www.signavio.com", price: "Paid" },
    { name: "IBM Blueworks Live", category: "Automation", subcategory: "Process Optimization", desc: "AI-driven platform for process modeling and optimization.", url: "https://www.ibm.com/cloud/blueworks-live", price: "Paid" },
    { name: "Appian", category: "Automation", subcategory: "Process Optimization", desc: "AI-assisted business process management and optimization software.", url: "https://www.appian.com", price: "Paid" },
    { name: "Kofax", category: "Automation", subcategory: "Process Optimization", desc: "AI-powered platform for automating and optimizing business processes.", url: "https://www.kofax.com", price: "Paid" },


    // Automation Robotic Process Automation (RPA) AI Tools
    { name: "UiPath", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-powered RPA platform for automating repetitive business tasks.", url: "https://www.uipath.com", price: "Free/Paid" },
    { name: "Automation Anywhere", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-assisted RPA platform for enterprise automation.", url: "https://www.automationanywhere.com", price: "Paid" },
    { name: "Blue Prism", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-driven RPA solution for process automation in enterprises.", url: "https://www.blueprism.com", price: "Paid" },
    { name: "Kofax RPA", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-powered platform for automating workflows and tasks.", url: "https://www.kofax.com/products/rpa", price: "Paid" },
    { name: "WorkFusion", category: "Automation", subcategory: "Robotic Process Automation (RPA)", desc: "AI-assisted RPA platform with cognitive automation capabilities.", url: "https://www.workfusion.com", price: "Paid" },


    // Automation Scripting AI Tools
    { name: "OpenAI Codex", category: "Automation", subcategory: "Scripting AI", desc: "AI-powered tool generating scripts and code from natural language.", url: "https://openai.com/codex", price: "Paid" },
    { name: "GitHub Copilot", category: "Automation", subcategory: "Scripting AI", desc: "AI-assisted coding assistant generating code snippets and scripts.", url: "https://github.com/features/copilot", price: "Paid" },
    { name: "Tabnine", category: "Automation", subcategory: "Scripting AI", desc: "AI-driven code completion and script generation tool.", url: "https://www.tabnine.com", price: "Free/Paid" },
    { name: "Replit Ghostwriter", category: "Automation", subcategory: "Scripting AI", desc: "AI-assisted code generator and scripting tool integrated in Replit.", url: "https://replit.com/ghostwriter", price: "Paid" },
    { name: "Kite", category: "Automation", subcategory: "Scripting AI", desc: "AI-powered coding assistant for script and code completion.", url: "https://www.kite.com", price: "Free/Paid" },


    // Automation AI Assistants Tools
    { name: "x.ai", category: "Automation", subcategory: "AI Assistants", desc: "AI-powered virtual assistant for task and meeting management.", url: "https://x.ai", price: "Paid" },
    { name: "Clara", category: "Automation", subcategory: "AI Assistants", desc: "AI-driven assistant handling scheduling and task automation.", url: "https://claralabs.com", price: "Paid" },
    { name: "Trevor AI", category: "Automation", subcategory: "AI Assistants", desc: "AI-powered personal assistant for task and calendar management.", url: "https://trevorai.com", price: "Free/Paid" },
    { name: "Fin", category: "Automation", subcategory: "AI Assistants", desc: "AI-assisted virtual assistant for business and personal tasks.", url: "https://www.fin.com", price: "Paid" },
    { name: "Magic", category: "Automation", subcategory: "AI Assistants", desc: "AI-powered platform providing virtual assistant services.", url: "https://www.getmagic.com", price: "Paid" },


    // Automation Report Automation AI Tools
    { name: "Narrative Science Quill", category: "Automation", subcategory: "Report Automation", desc: "AI-powered platform automatically generating business reports.", url: "https://narrativescience.com", price: "Paid" },
    { name: "Automated Insights Wordsmith", category: "Automation", subcategory: "Report Automation", desc: "AI-assisted platform converting data into natural language reports.", url: "https://automatedinsights.com", price: "Paid" },
    { name: "Zoho Analytics", category: "Automation", subcategory: "Report Automation", desc: "AI-driven reporting tool for automated dashboards and insights.", url: "https://www.zoho.com/analytics", price: "Free/Paid" },
    { name: "Power BI", category: "Automation", subcategory: "Report Automation", desc: "AI-assisted platform for automated report generation from data.", url: "https://powerbi.microsoft.com", price: "Paid" },
    { name: "Tableau", category: "Automation", subcategory: "Report Automation", desc: "AI-powered reporting and visualization platform for automation.", url: "https://www.tableau.com", price: "Paid" },


    // Research AI Research Search Engines Tools
    { name: "Semantic Scholar", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-powered academic search engine for research papers.", url: "https://www.semanticscholar.org", price: "Free" },
    { name: "Google Scholar", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-assisted search engine for scholarly articles and citations.", url: "https://scholar.google.com", price: "Free" },
    { name: "Microsoft Academic", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-driven platform for discovering academic papers and authors.", url: "https://academic.microsoft.com", price: "Free" },
    { name: "ResearchGate", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-assisted academic network for sharing and finding research.", url: "https://www.researchgate.net", price: "Free" },
    { name: "PubMed", category: "Research", subcategory: "AI Research Search Engines", desc: "AI-powered search engine for biomedical literature.", url: "https://pubmed.ncbi.nlm.nih.gov", price: "Free" },


    // Research Literature Review Assistants Tools
    { name: "Elicit", category: "Research", subcategory: "Literature Review Assistants", desc: "AI research assistant for literature reviews and summaries.", url: "https://elicit.org", price: "Free/Paid" },
    { name: "Research Rabbit", category: "Research", subcategory: "Literature Review Assistants", desc: "AI-powered tool to explore and visualize research papers.", url: "https://www.researchrabbit.ai", price: "Free/Paid" },
    { name: "Connected Papers", category: "Research", subcategory: "Literature Review Assistants", desc: "AI-driven tool for discovering related academic papers.", url: "https://www.connectedpapers.com", price: "Free" },
    { name: "Scite", category: "Research", subcategory: "Literature Review Assistants", desc: "AI-powered citation analysis and literature evaluation tool.", url: "https://scite.ai", price: "Free/Paid" },
    { name: "Scholarcy", category: "Research", subcategory: "Literature Review Assistants", desc: "AI tool summarizing research papers and extracting key findings.", url: "https://www.scholarcy.com", price: "Paid" },


    // Research Data Analysis AI Tools
    { name: "IBM Watson Studio", category: "Research", subcategory: "Data Analysis", desc: "AI-powered platform for data analysis and modeling.", url: "https://www.ibm.com/cloud/watson-studio", price: "Paid" },
    { name: "Google Colab", category: "Research", subcategory: "Data Analysis", desc: "AI-assisted cloud platform for coding and data analysis in Python.", url: "https://colab.research.google.com", price: "Free/Paid" },
    { name: "RapidMiner", category: "Research", subcategory: "Data Analysis", desc: "AI-powered data science platform for analysis and predictions.", url: "https://rapidminer.com", price: "Free/Paid" },
    { name: "KNIME", category: "Research", subcategory: "Data Analysis", desc: "AI-assisted tool for data analytics and machine learning workflows.", url: "https://www.knime.com", price: "Free/Paid" },
    { name: "Orange Data Mining", category: "Research", subcategory: "Data Analysis", desc: "AI-driven visual data analysis and machine learning tool.", url: "https://orange.biolab.si", price: "Free" },


    // Research Experiment Design AI Tools
    { name: "LabArchives", category: "Research", subcategory: "Experiment Design", desc: "AI-assisted platform for designing and managing experiments.", url: "https://www.labarchives.com", price: "Paid" },
    { name: "Benchling", category: "Research", subcategory: "Experiment Design", desc: "AI-powered tool for designing, tracking, and analyzing experiments.", url: "https://www.benchling.com", price: "Paid" },
    { name: "Labguru", category: "Research", subcategory: "Experiment Design", desc: "AI-assisted electronic lab notebook for experiment planning.", url: "https://www.labguru.com", price: "Paid" },
    { name: "Protocols.io", category: "Research", subcategory: "Experiment Design", desc: "AI-powered platform for designing and sharing scientific protocols.", url: "https://www.protocols.io", price: "Free/Paid" },
    { name: "Quartzy", category: "Research", subcategory: "Experiment Design", desc: "AI-assisted lab management platform for experiment tracking.", url: "https://www.quartzy.com", price: "Free/Paid" },


    // Research Citation & Reference Management AI Tools
    { name: "Zotero", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-assisted reference management and citation tool.", url: "https://www.zotero.org", price: "Free" },
    { name: "Mendeley", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-powered tool for managing research papers and references.", url: "https://www.mendeley.com", price: "Free/Paid" },
    { name: "EndNote", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-assisted platform for citation, bibliography, and reference management.", url: "https://www.endnote.com", price: "Paid" },
    { name: "RefWorks", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-powered tool for organizing and managing citations.", url: "https://refworks.proquest.com", price: "Paid" },
    { name: "Paperpile", category: "Research", subcategory: "Citation & Reference Management", desc: "AI-assisted reference manager for academic papers.", url: "https://paperpile.com", price: "Paid" },


    // Research Literature Mapping AI Tools
    { name: "Research Rabbit", category: "Research", subcategory: "Literature Mapping", desc: "AI-driven tool for mapping and visualizing research papers.", url: "https://www.researchrabbit.ai", price: "Free/Paid" },
    { name: "Connected Papers", category: "Research", subcategory: "Literature Mapping", desc: "AI-powered platform for visual exploration of related research papers.", url: "https://www.connectedpapers.com", price: "Free" },
    { name: "VOSviewer", category: "Research", subcategory: "Literature Mapping", desc: "AI-assisted tool for constructing and visualizing bibliometric networks.", url: "https://www.vosviewer.com", price: "Free" },
    { name: "CiteSpace", category: "Research", subcategory: "Literature Mapping", desc: "AI-driven software for visualizing trends and patterns in scientific literature.", url: "http://cluster.cis.drexel.edu/~cchen/citespace/", price: "Free" },
    { name: "Litmaps", category: "Research", subcategory: "Literature Mapping", desc: "AI-powered tool for tracking and mapping research papers.", url: "https://www.litmaps.com", price: "Free/Paid" },


    // Research Collaboration Tools AI Tools
    { name: "Overleaf", category: "Research", subcategory: "Collaboration Tools", desc: "AI-assisted online LaTeX editor for collaborative research writing.", url: "https://www.overleaf.com", price: "Free/Paid" },
    { name: "Authorea", category: "Research", subcategory: "Collaboration Tools", desc: "AI-powered platform for collaborative research paper writing.", url: "https://www.authorea.com", price: "Free/Paid" },
    { name: "Notion", category: "Research", subcategory: "Collaboration Tools", desc: "AI-assisted workspace for collaborative research notes and documentation.", url: "https://www.notion.so", price: "Free/Paid" },
    { name: "Slack", category: "Research", subcategory: "Collaboration Tools", desc: "AI-powered collaboration platform for research teams.", url: "https://slack.com", price: "Free/Paid" },
    { name: "Microsoft Teams", category: "Research", subcategory: "Collaboration Tools", desc: "AI-assisted platform for collaborative research meetings and communication.", url: "https://www.microsoft.com/microsoft-teams", price: "Free/Paid" },


    // Research Summarization AI Tools
    { name: "Scholarcy", category: "Research", subcategory: "Summarization", desc: "AI-powered tool for summarizing research papers and extracting key points.", url: "https://www.scholarcy.com", price: "Paid" },
    { name: "QuillBot", category: "Research", subcategory: "Summarization", desc: "AI-assisted platform for summarizing articles and papers.", url: "https://quillbot.com", price: "Free/Paid" },
    { name: "Resoomer", category: "Research", subcategory: "Summarization", desc: "AI-powered tool for condensing research content into summaries.", url: "https://resoomer.com", price: "Free/Paid" },
    { name: "SMMRY", category: "Research", subcategory: "Summarization", desc: "AI-assisted summarization tool for academic papers and documents.", url: "https://smmry.com", price: "Free" },
    { name: "ChatGPT", category: "Research", subcategory: "Summarization", desc: "AI-driven platform for generating concise summaries of research content.", url: "https://chat.openai.com", price: "Free/Paid" },


    // Research Trend Analysis AI Tools
    { name: "Dimensions", category: "Research", subcategory: "Trend Analysis", desc: "AI-powered platform for analyzing research trends and metrics.", url: "https://www.dimensions.ai", price: "Paid" },
    { name: "Altmetric", category: "Research", subcategory: "Trend Analysis", desc: "AI-assisted tool for tracking research impact and trends.", url: "https://www.altmetric.com", price: "Paid" },
    { name: "Scite", category: "Research", subcategory: "Trend Analysis", desc: "AI-powered platform analyzing citation patterns and research trends.", url: "https://scite.ai", price: "Free/Paid" },
    { name: "VOSviewer", category: "Research", subcategory: "Trend Analysis", desc: "AI-assisted tool for visualizing research trends in literature networks.", url: "https://www.vosviewer.com", price: "Free" },
    { name: "CiteSpace", category: "Research", subcategory: "Trend Analysis", desc: "AI-driven tool for identifying emerging research trends.", url: "http://cluster.cis.drexel.edu/~cchen/citespace/", price: "Free" },


    // Research Project Management AI Tools
    { name: "Labguru", category: "Research", subcategory: "Project Management", desc: "AI-assisted platform for managing research projects, tasks, and lab inventories.", url: "https://www.labguru.com", price: "Paid" },
    { name: "Benchling", category: "Research", subcategory: "Project Management", desc: "AI-powered platform for managing life sciences research projects and experiments.", url: "https://www.benchling.com", price: "Paid" },
    { name: "Quartzy", category: "Research", subcategory: "Project Management", desc: "AI-assisted lab management tool for tracking research projects and inventory.", url: "https://www.quartzy.com", price: "Free/Paid" },
    { name: "LabArchives", category: "Research", subcategory: "Project Management", desc: "AI-powered platform for organizing and managing research workflows.", url: "https://www.labarchives.com", price: "Paid" },
    { name: "Asana", category: "Research", subcategory: "Project Management", desc: "AI-assisted project management tool used for planning and tracking research tasks.", url: "https://asana.com", price: "Free/Paid" },


    // Automation Data Pipeline Automation AI Tools
    { name: "Apache NiFi", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-assisted platform for automating data workflows and pipelines.", url: "https://nifi.apache.org", price: "Free" },
    { name: "Airflow (Apache)", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-powered workflow and data pipeline orchestration tool.", url: "https://airflow.apache.org", price: "Free" },
    { name: "Talend", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-assisted data integration and pipeline automation platform.", url: "https://www.talend.com", price: "Paid" },
    { name: "Fivetran", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-powered platform for automating ETL and data pipelines.", url: "https://www.fivetran.com", price: "Paid" },
    { name: "Prefect", category: "Automation", subcategory: "Data Pipeline Automation", desc: "AI-assisted tool for orchestrating and automating data workflows.", url: "https://www.prefect.io", price: "Free/Paid" },

];


// ---------- Subcategories ----------
const subcategories = {
    "Video": ["Video Generation", "Animation", "Video Editing", "Video Upscaling", "Screen Recording", "Motion Capture", "3D Animation", "Video Summarization", "Subtitles / Captions", "Special Effects"],
    "Text": ["Writing", "Chatbots", "Summarization", "Translation", "Grammar Check", "SEO Content", "Email Drafting", "Storytelling", "Scripts", "Q&A Assistants"],
    "Image": ["AI Art", "Generative Art", "Photo Editing", "Design", "Background Removal", "Avatar Generators", "Image Upscaling", "Style Transfer", "Memes / Fun Images", "3D Models"],
    "Audio": ["Music Generation", "Voice / TTS", "Sound Effects", "Noise Removal", "Audio Enhancement", "Podcast Editing", "Audio Transcription", "Music Remixing", "Voice Cloning", "Audio Analysis"],
    "Editing": ["Photo Editing", "Video Editing", "Background Removal", "Color Correction", "Image Retouching", "Video Stabilization", "Cropping / Resizing", "Filters / Effects", "Collage Making", "Template Editing"],
    "Code": ["Code / Programming AI", "Data Analysis / AI Analytics", "Code Generation", "Debugging Tools", "API Integration", "Database Tools", "Code Refactoring", "No-Code AI Platforms", "Automation Scripts", "Algorithm Optimization"],
    "Marketing": ["SEO Analysis", "Content Generation", "Social Media Tools", "Email Campaigns", "Analytics / Insights", "Ad Creatives", "Audience Targeting", "Trend Analysis", "Brand Monitoring", "Competitor Analysis"],
    "Productivity": ["Task Automation", "Project Management AI", "Document Summarization", "Note Taking AI", "Calendar / Scheduling AI", "Time Tracking", "Workflow Optimization", "Team Collaboration", "Email Drafting", "AI Assistants"],
    "ShareMarket": ["Stock Analysis", "Portfolio Management", "Market Prediction", "Trading Signals", "News Aggregation", "Technical Analysis", "Sentiment Analysis", "Algorithmic Trading", "Stock Screening", "Investment Insights"],
    "Health": ["Diagnostics", "Fitness Tracking", "Telemedicine", "Mental Health", "Drug Discovery", "Nutrition", "Medical Imaging", "Wearables", "Symptom Checkers", "Health Analytics"],
    "Gaming": ["AI Game Characters", "Procedural Level Generation", "Game Story", "AI Game Testing", "Game Asset Creation", "AI Game Balancing", "Voice / Dialogue Generation", "Animation AI", "AI Game Analytics", "Cheat Detection / Anti-Cheat AI"],
    "Networking": ["Network Monitoring AI", "Traffic Analysis", "Threat Detection", "Performance Optimization", "Network Automation", "Anomaly Detection", "Cybersecurity AI", "Load Balancing AI", "Wi-Fi Optimization", "Packet Analysis"],
    "Food": ["Recipe Generation", "Meal Planning AI", "Nutrition Analysis", "Calorie Tracking", "Food Recognition", "Diet Recommendations", "Menu Optimization", "Smart Kitchen AI", "Ingredient Substitution", "Restaurant Analytics"],
    "Shopping": ["Price Comparison AI", "Product Recommendation", "Visual Search", "Style / Outfit Suggestions", "Smart Cart Management", "Discount & Deal Finder", "Inventory Prediction", "Customer Review Analysis", "Personalized Offers", "E-commerce Analytics"],
    "Education": ["AI Tutoring", "Homework Assistance", "Language Learning", "Exam Preparation", "Personalized Learning", "Quiz / Test Generation", "Content Summarization", "Interactive Lessons", "Virtual Labs", "Learning Analytics"],
    "Entertainment": ["Movie/TV Recommendations", "Music Recommendations", "Playlist Generators", "AI Storytelling", "Interactive Games", "Virtual Concerts", "Voice Cloning for Fun", "Fan Art Generation", "Meme Generation", "AI Quizzes"],
    "Security": ["Face Recognition", "Surveillance AI", "Anomaly Detection", "Cybersecurity Alerts", "Password Management AI", "Threat Prediction", "Smart Lock Control", "Network Monitoring", "Phishing Detection", "Data Encryption AI"],
    "Environment": ["Air Quality Monitoring", "Energy Optimization", "Waste Management AI", "Climate Forecasting", "Water Usage Optimization", "Smart Agriculture", "Traffic Prediction", "Urban Planning AI", "Noise Monitoring", "Sustainable Recommendations"],
    "Lifestyle": ["Fitness Planner AI", "Meal Planning AI", "Meditation & Relaxation AI", "Sleep Tracking", "Fashion AI", "Interior Design Suggestions", "Gardening AI", "Pet Care AI", "Event Planning AI", "Hobby Suggestions AI"],
    "Social": ["AI Chat Companions", "Sentiment Analysis", "Content Suggestion", "Social Media Insights", "Trend Detection", "Influencer Analytics", "Engagement Optimization", "Hashtag Suggestions", "Community Monitoring AI", "Event Promotion AI"],
    "Travel": ["AI Trip Planner", "Flight Price Prediction", "Hotel Recommendations", "Itinerary Generation", "Language Translation", "Local Experience Suggestions", "Travel Chatbots", "Route Optimization", "Tourist Guide AI", "Expense Management AI"],
    "PersonalAssistant": ["Voice Assistants", "Reminder AI", "Task Management", "Email Drafting", "Scheduling", "Calendar Optimization", "Meeting Summaries", "Habit Tracking", "Personal Insights", "AI Concierge"],
    "Research": ["AI Research Search Engines", "Literature Review Assistants", "Data Analysis", "Experiment Design", "Citation & Reference Management", "Literature Mapping", "Collaboration Tools", "Summarization", "Trend Analysis", "Project Management"],
    "Presentation": ["Slide Generation", "Design Templates", "AI Pitch Decks", "Infographics", "Data Visualization", "Content Summarization", "Image / Diagram Creation", "Chart Generation", "Animations", "Speaker Notes Assistance"],
    "Automation": ["Task Automation", "Workflow Automation", "Email Automation", "Marketing Automation", "Process Optimization", "Robotic Process Automation (RPA)", "Scripting AI", "AI Assistants", "Report Automation", "Data Pipeline Automation"]

};

// At the very end of data.js
window.tools = tools;
window.subcategories = subcategories;

// Debug log
console.log("✅ data.js loaded - Tools count:", tools.length);