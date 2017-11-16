function Brand(option) {
    this._init(option);
    this.render();
}
Brand.prototype={
    constructor:Brand,
    _init:function (option) {
        this.parent=option.parent;
        this.className=option.className || "brand";
        this.bgi=option.bgi;
        this.text=option.text;
        this.tClassName=option.tClassName;
        this.content=new BrandContent(option.content);
        this.odiv=document.createElement('div');

        let self = this;
        this.odiv.onmouseover = function(){
            self.content.style.display = "block";
        }
        this.odiv.onmouseout = function(){
            self.content.style.display = "none";
        }
    },
    render:function () {
        this.odiv.style.backgroundImage="url("+this.bgi+")";
        this.odiv.className=this.className;
        let tdiv=document.createElement('div');
        tdiv.innerHTML = this.text;
        tdiv.className=this.tClassName;

        this.odiv.appendChild(tdiv);
        this.odiv.appendChild(this.content);
        this.parent.appendChild(this.odiv);

    }
};

function BrandContent(option) {
    this._init(option);
    return this.render();
}
BrandContent.prototype={
    constructor:Brand,
    _init:function (option) {
        this.img1=option.img1;
        this.img2=option.img2;
        this.img3=option.img3;
        this.text=option.text;
        this.className=option.className || "brand-content";
    },
    render:function () {
        let odiv=document.createElement('div');
        odiv.className=this.className;


        let top=document.createElement('div');
        let bottom=document.createElement('div');
        bottom.innerHTML = this.text;
        odiv.appendChild(top);
        odiv.appendChild(bottom);

        let img1=document.createElement('img');
        img1.src = this.img1;
        let img2=document.createElement('img');
        img2.src = this.img2;
        let img3=document.createElement('img');
        img3.src = this.img3;
        top.appendChild(img1);
        top.appendChild(img2);
        top.appendChild(img3);

        return odiv;
    }
};
