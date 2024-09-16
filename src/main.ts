import { PorcupineWorker, PorcupineDetection, BuiltInKeyword } from "@picovoice/porcupine-web";
import { WebVoiceProcessor } from "@picovoice/web-voice-processor";

function keywordDetectionCallback(detection: PorcupineDetection) {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    }, 1000);
    console.log(`Porcupine detected keyword index: ${detection.label}`);
}

async function startListening() {
    const porcupine = await PorcupineWorker.create(
        "01atpSdPc+bYfKTjSO4Me6XZvAcoiWYI/NoCxW0bWZdJS+NTBwOnUQ==",
        BuiltInKeyword.Porcupine,
        keywordDetectionCallback,
        { publicPath: "/porcupine_params.pv" }
    );

    await WebVoiceProcessor.subscribe(porcupine);
}

startListening();
