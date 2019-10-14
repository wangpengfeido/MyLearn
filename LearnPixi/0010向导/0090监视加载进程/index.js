const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

document.body.appendChild(app.view);

let cat;
PIXI.loader.add('catImage', '../assets/cat.png')
.on('progress',(loader,resource)=>{
  // progress事件在一个文件加载完成后被触发
  // resource.url 是被加载的文件
  // loader.progress 是总加载进度
  console.log(resource.url);
  console.log("progress: ",loader.progress);
})
.load(() => {
  cat = new PIXI.Sprite(PIXI.loader.resources['catImage'].texture);
  app.stage.addChild(cat);
});
