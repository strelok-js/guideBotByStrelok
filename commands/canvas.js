const canvas = require('canvas');
module.exports = async (bot,message,args,argsF) => {

    const Canvas = canvas.createCanvas(200, 200);
    Canvas.height = 500;
    Canvas.width = 700;
    const ctx = Canvas.getContext('2d');

    let длинна = 250, 
    высота = 250;
    ctx.fillStyle = "#FF6347";
    ctx.globalAlpha = 0.70;
    ctx.fillRect(25,25, длинна, высота);

    ctx.strokeStyle = "#FA1347";
    ctx.lineWidth = 10;
    ctx.strokeRect(300, 25, длинна, высота);

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000000";

    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
    let радиус = 100,
    начальныйУгол = 50,
    конечныйУгол = 200,
    поЧасовойИлиПротив = true;
    ctx.strokeStyle = "#FAAAAA";
    ctx.beginPath();
    ctx.arc(250, 250, радиус, начальныйУгол, конечныйУгол, поЧасовойИлиПротив);
    ctx.stroke();

    ctx.font = "48px Time new Roman";
    ctx.textAlign = "center";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

    ctx.fillText("TEXT для примера", 350, 50);

    const image = await canvas.loadImage("./testImage.png");

    ctx.drawImage(image, 0,0);

    //ctx.clearRect(125, 25, длинна, высота); 


    const {channel} = message;
    channel.send({
        files: [
            {attachment: Canvas.toBuffer(), name: 'test.png', description: "Ну очень уж красивый рисунок"},
        ]
    });
};
module.exports.names = ["canvas"];
