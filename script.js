var tab = 2;
var slectedTab = 1;
var skins = {};
var geometrys = {};
var geometrysjson = {};
var textureSizes = {};
var scene;
var group;
var customSize = {
    x:64,
    y:64,
}
var customSlimSize = {
    x:64,
    y:64,
}
function ImageToBase64(img, mime_type) {
    var canvas = document.createElement('canvas');
    canvas.width  = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL(mime_type);
}
onload = ()=>{
    var width = 0;
    var height = 0;

    const canvasElement = document.getElementById("Viewer");
    width = canvasElement.clientWidth;
    height = canvasElement.clientHeight;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha : true
    });
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();
    group = new THREE.Group();
    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    // カメラの初期座標を設定
    camera.position.set(10, 10, 10);

    // カメラコントローラーを作成
    const controls = new THREE.OrbitControls(camera, canvasElement);
    scene.add(group);
    const light = new THREE.HemisphereLight(0xCCCCCC, 0xAAAAAA, 1.0);
    scene.add(light);
    //box({x:0,y:0,z:0},{x:3,y:3,z:3},null);
    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      // レンダリング
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }

    geometrys["custom"] = custom;
    geometrysjson["custom"] = {data:null,added:true};
    geometrys["customSlim"] = customSlim;
    geometrysjson["customSlim"] = {data:null,added:true};

    var a = document.getElementById("geo1")
    skins[`${1}`] = new Skin("skin name","custom","","",null,a,1);
    textureSizes["custom"] = customSize;
    textureSizes["customSlim"] = customSlimSize;
}
function addtab(){
    var d = document.getElementById("container");//label
    const label = document.createElement("label");
	label.setAttribute("class","list"); 
	label.setAttribute("for",`select${tab}`);
    label.id = `list${tab}`;
    const input1 = document.createElement("input");//input
	input1.setAttribute("type","button"); 
	input1.setAttribute("id",`select${tab}`);
	input1.setAttribute("class","none");
	input1.setAttribute("onclick",`setTab(${tab})`);
    const p1 = document.createElement("p");
    p1.textContent = "name:";
    p1.className = "sname";
    const input2 = document.createElement("input")
    input2.type = "text";
    input2.className = "input";
    input2.value = "skin name" + tab;
    input2.id = `sname${tab}`
    p1.appendChild(input2);
    label.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "geometry:";
    p2.className = "geoname";
    const select = document.createElement("select");
    select.setAttribute("onchange",`GeoChanged(this.value,${tab})`);
    select.id =`geo${tab}`
    const option1 = document.createElement("option");
    option1.textContent = "custom";
    option1.value = "custom";
    const option2 = document.createElement("option");
    option2.textContent = "customSlim";
    option2.id = `slim${tab}`
    option2.value = "customSlim";
    const option3 = document.createElement("option");
    option3.textContent = "other";
    option3.value = "other";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.selectedIndex = 1;
    select.value = "custom"
    p2.appendChild(select);
    label.appendChild(p2);

    const p3 = document.createElement("p");
    p3.className = "imgname";
    p3.textContent = "image:"
    p3.id = `fileimg${tab}`
    const label1 = document.createElement("label");
    label1.htmlFor = `file${tab}`;
    label1.className = "file";
    const img1 = document.createElement("img");
    img1.src = "file.png"
    const input3 = document.createElement("input");
    input3.type = "file";
    input3.accept = ".png"
    input3.setAttribute("onchange",`selectFile(
        this.files[0].name,
        window.URL.createObjectURL(this.files[0]),
        ${tab},this.files[0]
    )`);
    input3.className = "input";
    input3.id = `file${tab}`;
    label1.appendChild(img1);
    label1.appendChild(input3);
    p3.appendChild(label1);
    label.appendChild(p3);
    const p4 = document.createElement("p");
    p4.className = "delete";
    const label2 = document.createElement("label");
    label2.className = "deleteic";
    label2.htmlFor = `del${tab}`;
    const img2 = document.createElement("img");
    img2.src ="del.png";
    label2.appendChild(img2);
    const input4 = document.createElement("input");
    input4.type = "button";
    input4.className = "input";
    input4.id = `del${tab}`
    input4.setAttribute("onclick",`deleteTab(${tab})`); 
    label2.appendChild(input4);
    p4.appendChild(label2);
    label.appendChild(p4);

    label.appendChild(input1);
    d.appendChild(label);
    skins[`${tab}`] = new Skin("skin name" + tab,"custom","","",null,select,tab);
    tab++; 
}
function Skin(name,geometry,url,Filename,img,document,id){
    this.name = name;
    this.geometry = geometry;
    this.url = url;
    this.Filename = Filename;
    this.img = img;
    this.document = document;
    this.id = id;
}
function test(a){
    console.log(a);
}
function setTab(i){
    var target = document.getElementById(`list${i}`);
    target.className = "listSl";

    var target2 = document.getElementById(`texture`);
    if(skins[`${i}`].url != null && skins[`${i}`].url != ""){
        target2.src = skins[`${i}`].url;
    }else{
        target2.src = "steve.png";
    }
    loadGeo(geometrys[skins[`${i}`].geometry],textureSizes[skins[`${i}`].geometry]);
    if(slectedTab!=0 && slectedTab != i){
        var etarget = document.getElementById(`list${slectedTab}`);
        etarget.className = "list";
    }
    slectedTab = i;
}
function deleteTab(i){
    var target = document.getElementById(`list${i}`);
    if(i == slectedTab){
        slectedTab = 0;
    }
    delete skins[`${i}`];
    console.log(Object.keys(skins).length);
    target.remove(); 
}
function selectFile(filename,url,id,file){
    var tar = new Image();
    tar.onload = function(e){
        var width = tar.width;
        var height = tar.height;
        skins[`${id}`].img = ImageToBase64(tar,"image/png");
    }
    tar.src = url;

    var target = document.getElementById(`fileimg${id}`);
    target.textContent = "image:" + filename;
    const label1 = document.createElement("label");
    label1.htmlFor = `file${id}`;
    label1.className = "file";
    const img1 = document.createElement("img");
    img1.src = "file.png"
    const input3 = document.createElement("input");
    input3.type = "file";
    input3.setAttribute("onchange",`selectFile(
        this.files[0].name,
        window.URL.createObjectURL(this.files[0]),
        ${id},this.files[0]
    )`);
    input3.className = "input";
    input3.id = `file${id}`;
    label1.appendChild(img1);
    label1.appendChild(input3);
    target.appendChild(label1);
    skins[`${id}`].Filename = filename;
    skins[`${id}`].url = url;
    //var target2 = document.getElementById(`tt`);
    //target2.src = url;
}
function GeoChanged(value,id){
    if(value == "other"){
        var file = document.createElement("input");
        file.type = "file";
        file.accept = ".json";
        file.setAttribute("onchange",`loadNewGeo(
            this.files[0].name,
            window.URL.createObjectURL(this.files[0]),
            ${id},this.files[0]
        )`);
        file.click();
        var target2 = document.getElementById(`geo${id}`);
        target2.value = "custom";
        skins[`${id}`].geometry = "custom";

    }else{
        skins[`${id}`].geometry = value;
        console.log(skins[`${id}`]);
    }
}
var skinjson = {
    "skins": [
    ],
    "serialize_name": "",
    "localization_name": ""
  }
  
function generate(){
    var Newmanifest = manifest();
    var zip = new JSZip();
    zip.folder("skinpack").file("manifest.json", `${Newmanifest}`);
    var n = 0;
    for (const key in skins) {
        if (Object.hasOwnProperty.call(skins, key)) {
            const element = skins[key];
            skinjson.skins.push(
                {
                    "localization_name": element.name,
                    "geometry": `geometry.humanoid.${element.geometry}`,
                    "texture": element.Filename,
                    "type": "free"
                }
            )
            if(!geometrysjson[element.geometry].added)
            {
                //zip.file(`geo${n}.json`, `${JSON.stringify(geometrysjson[element.geometry].data,null,"  ")}`);
                geojson["minecraft:geometry"].push(geometrysjson[element.geometry].data);
                geometrysjson[element.geometry].added = true;
                n++;
            }

            console.log(element.img);
            var imgData = element.img.replace(/^data:image\/(png|jpg);base64,/, "");
            imgData = atob(imgData);
            zip.file(element.Filename, imgData, {binary: true});
            /*var imm = document.createElement("img");
            imm.src = element.url;
            //var imgData = ImageToBase64(imm,"image/png");
            var canvas = document.createElement('canvas');
            canvas.width  = imm.width;
            canvas.height = imm.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(imm, 0, 0);
            var g = canvas.toDataURL(mime_type);
            console.log(g);
            //console.log(element.url);
            //imgData = imgData.substr(22);
            //imgData = atob(imgData);
            //console.log(imgData);
            //zip.file(element.Filename, imgData, {binary: true});*/
        }
    }
    var target = document.getElementById("serialize");
    var target2 = document.getElementById("localization");
    skinjson.serialize_name = target.value;
    skinjson.localization_name = target2.value;
    zip.file("geometry.json", `${JSON.stringify(geojson,null,"  ")}`);
    zip.file("skins.json", `${JSON.stringify(skinjson,null,"  ")}`);
    //zip.folder("test").folder("a").file("Hello.txt", "Hello World\n");
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "skin.zip");
    });

    /*let blob = new Blob([JSON.stringify(skinjson,null,"  ")],{type:"text/plan"});
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download =  'skins.json';
    link.click();**/
}
function loadNewGeo(filename,url,id,file){
    alert(filename);
    const reader = new FileReader();
    reader.onload = () => {
        var data = JSON.parse(reader.result);
        if(Object.keys(data)[1] == "minecraft:geometry"){
            for (const key in skins) {
                if (Object.hasOwnProperty.call(skins, key)) {
                    const element = skins[key];
                    var target = document.getElementById(`slim${element.id}`)
                    const option3 = document.createElement("option");
                    option3.value = data["minecraft:geometry"][0]["description"]["identifier"];
                    option3.textContent = data["minecraft:geometry"][0]["description"]["identifier"];
                    target.after(option3);
                    geometrys[data["minecraft:geometry"][0]["description"]["identifier"]] = data["minecraft:geometry"][0].bones;
                    geometrysjson[data["minecraft:geometry"][0]["description"]["identifier"]] = {data:data["minecraft:geometry"][0],added:false};
                }
            }
            var target2 = document.getElementById(`geo${id}`);
            target2.value = data["minecraft:geometry"][0]["description"]["identifier"];
            skins[`${id}`].geometry = data["minecraft:geometry"][0]["description"]["identifier"];
            textureSizes[data["minecraft:geometry"][0]["description"]["identifier"]] = {
                x:data["minecraft:geometry"][0]["description"]["texture_width"],
                y:data["minecraft:geometry"][0]["description"]["texture_height"]
            }
        }
        /*else if(Object.keys(data)[1].match(/geometry/)){
            for (const key in skins) {
                if (Object.hasOwnProperty.call(skins, key)) {
                    const element = skins[key];
                    var target = document.getElementById(`slim${element.id}`);
                    const option3 = document.createElement("option");
                    option3.value = Object.keys(data)[1];
                    option3.textContent = Object.keys(data)[1];
                    target.after(option3);
                    geometrys[Object.keys(data)[1]] = Object.values(data)[1].bones;
                    geometrysjson[Object.keys(data)[1]] = {data:data,added:false};
                }
            }
            var target2 = document.getElementById(`geo${id}`);
            target2.value = Object.keys(data)[1];
            skins[`${id}`].geometry = Object.keys(data)[1];
            textureSizes[Object.keys(data)[1]] = {
                x:Object.keys(data)[1]["texturewidth"],
                y:Object.keys(data)[1]["textureheight"]
            }
        }*/
        else{
            alert("cannot read file.")
        }
    };

    reader.readAsText(file);
}
function loadGeo(bones,textureSize){
    while(group.children.length > 0){ 
        group.remove(group.children[0]); 
    }
    for (let i = 0; i < bones.length; i++) {
        const element = bones[i];
        //console.log(element);
        if(Object.hasOwnProperty.call(element, "cubes")){
            for (let p = 0; p < element.cubes.length; p++) {
                const element2 = element.cubes[p];
                var origin = {x:element2.origin[0],y:element2.origin[1],z:element2.origin[2]};
                var offset = {x:element2.size[0],y:element2.size[1],z:element2.size[2]};
                box(origin,offset,element2.uv,textureSize);
            }
        }
    }
}
function box(origin,offset,uv,textureSize){
    /*var color = Math.round(Math.random() * 101 + 155) * 0x10000 + Math.round(Math.random() * 101 + 155) * 0x100 + Math.round(Math.random() * 101 + 155) * 0x1
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(
        offset.x,offset.y,offset.z), new THREE.MeshLambertMaterial({color: color}));
    mesh.position.x = origin.x + offset.x / 2;
    mesh.position.y = origin.y + offset.y / 2,
    mesh.position.z = origin.z + offset.z / 2
    group.add(mesh);*/
    //console.log("a");




    let geom = new THREE.BoxGeometry(offset.x, offset.y, offset.z);

    geom.faces.forEach( face => { face.materialIndex = 0 });

    let tex = {
      resolution: { width: textureSize.x, height: textureSize.y },
      uv: [
        { tag: "left", x: uv[0] + 0, y:uv[1] +  offset.z, w: offset.z, h: offset.y, topleft: 2 },
        { tag: "right", x:uv[0] +  offset.x + offset.z, y:uv[1] + offset.z, w: offset.z, h: offset.y, topleft: 2 },
        { tag: "top", x:uv[0] +  offset.z, y:uv[1] + 0, w: offset.x, h: offset.z, topleft: 0 },
        { tag: "bottom", x:uv[0] +  offset.z + offset.x, y:uv[1] + 0, w: offset.x, h: offset.z, topleft: 2 },
        { tag: "front", x:uv[0] +  offset.z * 2 + offset.x, y:uv[1] + offset.z, w: offset.x, h: offset.y, topleft: 0 },
        { tag: "back", x:uv[0] +  offset.z, y:uv[1] + offset.z, w: offset.x, h: offset.y, topleft: 0 },
      ]
    }
  
    let points = [];
    for(let i=0; i<6; i++)
    {
      let rect = {
        left:   tex.uv[i].x / tex.resolution.width,
        top:    1 - tex.uv[i].y / tex.resolution.height,
        right:  (tex.uv[i].x + tex.uv[i].w) / tex.resolution.width,
        bottom: 1 - (tex.uv[i].y + tex.uv[i].h) / tex.resolution.height
      }
  
      points[i] = [
        { x: rect.left,  y: rect.top,    order: (tex.uv[i].topleft + 0) % 4 },
        { x: rect.right, y: rect.top,    order: (tex.uv[i].topleft + 1) % 4 },
        { x: rect.right, y: rect.bottom, order: (tex.uv[i].topleft + 2) % 4 },
        { x: rect.left,  y: rect.bottom, order: (tex.uv[i].topleft + 3) % 4 },
      ]

      points[i] = points[i].sort( (a,b)=>{ return b.order - a.order } );
    }

    let triangle = (point, indices, shift) => {
      shift = shift ? shift: 0
      indices = indices.map( v => (v + shift) % 4 );
      return [
        new THREE.Vector2( point[ indices[0] ].x, point[ indices[0] ].y ),
        new THREE.Vector2( point[ indices[1] ].x, point[ indices[1] ].y ),
        new THREE.Vector2( point[ indices[2] ].x, point[ indices[2] ].y )
      ]
    }

    geom.faceVertexUvs[0] = [
      // right
      triangle( points[0], [ 1, 2, 0 ] ),
      triangle( points[0], [ 2, 3, 0 ] ),
      // left
      triangle( points[1], [ 1, 2, 0 ] ),
      triangle( points[1], [ 2, 3, 0 ] ),
      // top
      triangle( points[2], [ 1, 2, 0 ], 2 ),
      triangle( points[2], [ 2, 3, 0 ], 2 ),
      // bottom
      triangle( points[3], [ 1, 2, 0 ] ),
      triangle( points[3], [ 2, 3, 0 ] ),
      // front
      triangle( points[4], [ 1, 2, 0 ], 2 ),
      triangle( points[4], [ 2, 3, 0 ], 2 ),
      // back
      triangle( points[5], [ 1, 2, 0 ], 2 ),
      triangle( points[5], [ 2, 3, 0 ], 2 ),
    ];
  
    // ジオメトリの更新フラグを立てる
    geom.uvsNeedUpdate = true;
  
    // IMGタグからテクスチャオブジェクトを作成
    let texture = new THREE.CanvasTexture( document.getElementById("texture") );
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.type = THREE.FloatType;
  
    // Meshオブジェクトの作成
    let box = new THREE.Mesh(
      geom,
      [ new THREE.MeshLambertMaterial({ map: texture ,transparent:true}) ]
    );

    box.position.x = origin.x + offset.x / 2;
    box.position.y = origin.y + offset.y / 2;
    box.position.z = origin.z + offset.z / 2;

    group.add(box);
}
function uuid(){
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
        }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
return uuid;
}
function manifest(){
    var Newuuid = uuid()
    var Newuuid2 = uuid()
    var manifest = {
        "format_version": 1,
        "header": {
            "name": "Skin Pack",
            "uuid": Newuuid,
            "version": [0, 0, 1],
            "min_engine_version": [1, 2, 6]
        },
        "modules": [
            {
                "type": "skin_pack",
                "uuid": Newuuid2,
                "version": [0, 0, 1]
            }
        ]
    }
    var final = JSON.stringify(manifest, null, "\t")
    return final

}
