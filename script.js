var tab = 2;
var slectedTab = 1;
var skins = {};
onload = ()=>{
    skins[`${1}`] = (new Skin("skin name","custom","","",null));
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
    const option2 = document.createElement("option");
    option2.textContent = "customSlim";
    select.appendChild(option1);
    select.appendChild(option2);
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
    skins[`${tab}`] = new Skin("skin name" + tab,"custom","","",null);
    tab++; 
}
function Skin(name,geometry,url,Filename,img){
    this.name = name;
    this.geometry = geometry;
    this.url = url;
    this.Filename = Filename;
    this.img = img;
}
function test(a){
    console.log(a);
}
function setTab(i){
    var target = document.getElementById(`list${i}`);
    target.className = "listSl";

    var target2 = document.getElementById(`tt`);
    if(skins[`${i}`].url != null ){
        target2.src = skins[`${i}`].url;
    }
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

    var target2 = document.getElementById(`tt`);
    target2.src = url;
}
function GeoChanged(value,id){
    skins[`${id}`].geometry = value;
    console.log(skins[`${id}`]);
}
var skinjson = {
    "skins": [
    ],
    "serialize_name": "",
    "localization_name": ""
  }
  
function generate(){
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
        }
    }
    var target = document.getElementById("serialize");
    var target2 = document.getElementById("localization");
    skinjson.serialize_name = target.value;
    skinjson.localization_name = target2.value;
    let blob = new Blob([JSON.stringify(skinjson,null,"  ")],{type:"text/plan"});
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download =  'skins.json';
    link.click();
}