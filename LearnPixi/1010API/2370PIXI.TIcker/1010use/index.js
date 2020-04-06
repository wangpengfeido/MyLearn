const ticker = new PIXI.Ticker();
ticker.maxFPS = 10000;
ticker.minFPS = 0;
console.log(ticker.minFPS);

let deltaSum = 0;
let tickerTimeSum = 0;
let msSum = 0;

ticker.add(delta => {
  msSum += ticker.elapsedMS;
  tickerTimeSum++;
  // delta是ticker.deltaTime的值，表示距上一帧过去的时间（归一化值,可看做目标帧数的倍数）
  deltaSum += delta;
  console.log(
    `delta:${delta};    deltaSum:${deltaSum};    tickerTimeSum:${tickerTimeSum};    msSum:${msSum};    fps:${ticker.FPS};`
  );
});
ticker.start();
