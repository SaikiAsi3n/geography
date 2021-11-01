var index=0;
function nextslide() {
    if(index>=2){
        index=-1;
    }
    index++;
    var img=["img/hanoi.jpg" , "img/hochiminh.jpg" , "img/haiphong.jpg"];
    var info=["Hà Nội là thủ đô của đất nước Việt Nam" , "Hồ Chí Minh là trung tâm tài chính lớn nhất Việt" , "Hải Phòng được mệnh danh là thành phố cảng"]
    var name=["Hà Nội", "Hồ Chí Minh", "Hải Phòng"];
    document.getElementById('img__present').src = img[index];
    document.getElementById('info__present').innerHTML = info[index];
    document.getElementById('name__present').innerHTML = name[index];
    if(index==2){
        document.getElementById('img__next').src = img[index-2]; 
        document.getElementById('info__next').innerHTML = info[index-2];
        document.getElementById('name__next').innerHTML = name[index-2];
    }
    else{
        document.getElementById('img__next').src = img[index+1]; 
        document.getElementById('info__next').innerHTML = info[index+1];
        document.getElementById('name__next').innerHTML = name[index+1];
    }
    if(index==0){
        document.getElementById('img__back').src = img[index+2];
        document.getElementById('info__back').innerHTML = info[index+2];
        document.getElementById('name__back').innerHTML = name[index+2];
    }
    else{
        document.getElementById('img__back').src = img[index-1];
        document.getElementById('info__back').innerHTML = info[index-1];
        document.getElementById('name__back').innerHTML = name[index-1];
    }       
}

function backslide() {
    if(index==0){
        index=3;
    }
    index--;
    var img=["img/hanoi.jpg" , "img/hochiminh.jpg" , "img/haiphong.jpg"];
    var info=["Hà Nội là thủ đô của đất nước Việt Nam" , "Hồ Chí Minh là trung tâm tài chính lớn nhất Việt" , "Hải Phòng được mệnh danh là thành phố cảng"]
    var name=["Hà Nội", "Hồ Chí Minh", "Hải Phòng"];
    document.getElementById('img__present').src = img[index];
    document.getElementById('info__present').innerHTML = info[index];
    document.getElementById('name__present').innerHTML = name[index];
    if(index==2){
        document.getElementById('img__next').src = img[index-2]; 
        document.getElementById('info__next').innerHTML = info[index-2];
        document.getElementById('name__next').innerHTML = name[index-2];
    }
    if(index!=2){
        document.getElementById('img__next').src = img[index+1]; 
        document.getElementById('info__next').innerHTML = info[index+1];
        document.getElementById('name__next').innerHTML = name[index+1];
    }
    if(index==0){
        document.getElementById('img__back').src = img[index+2];
        document.getElementById('info__back').innerHTML = info[index+2];
        document.getElementById('name__back').innerHTML = name[index+2];
    }
    if(index!=0){
        document.getElementById('img__back').src = img[index-1];
        document.getElementById('info__back').innerHTML = info[index-1];
        document.getElementById('name__back').innerHTML = name[index-1];
    }       
}

function showPage() {
    var page = ["Hà Nội đã sớm trở thành một trung tâm chính trị, kinh tế và văn hóa ngay từ những buổi đầu của lịch sử Việt Nam. Với vai trò thủ đô, Hà Nội là nơi tập trung nhiều địa điểm văn hóa giải trí, công trình thể thao quan trọng của đất nước, đồng thời cũng là địa điểm được lựa chọn để tổ chức nhiều sự kiện chính trị và thể thao quốc tế",
                "Thành phố Hồ Chí Minh (tên gọi cũ là Sài Gòn hay Xì Gòn, Xì Phố), tuy nhiên hiện nay vẫn thường được dùng) là thành phố lớn nhất ở Việt Nam về dân số và quy mô đô thị hóa. Đây còn là trung tâm kinh tế, chính trị, văn hóa và giáo dục tại Việt Nam.",
                "Hải Phòng là thành phố cảng quan trọng, trung tâm công nghiệp, cảng biển, đồng thời cũng là trung tâm kinh tế, văn hóa, y tế, giáo dục, khoa học, thương mại và công nghệ của Vùng duyên hải Bắc Bộ của Việt Nam."
            ]
    var video = ["https://www.youtube.com/embed/FClS4ni4zfo", 
                "https://www.youtube.com/embed/3KDtWI2-cwY?controls=0",
                "https://www.youtube.com/embed/YbVaFj5V6Yg"
                ]
    var name=["Hà Nội", "Hồ Chí Minh", "Hải Phòng"];
    var img=["img/hanoi.jpg" , "img/hochiminh.jpg" , "img/haiphong.jpg"];

    document.getElementById('start__header__logo').src = img[index];
    document.getElementById('start__main__info').innerHTML = page[index];
    document.getElementById('start__main__name').innerHTML = name[index];
    document.getElementById('start__main__video').src = video[index];
    document.getElementById('begin').style.display = 'none';
    document.getElementById('start').style.display = 'block';
      
}

function hiddenPage() {
    document.getElementById('begin').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('start__main__video').src = 'none';
}

var menu=2;
function showMenu() {   
    if (menu%2==0){
        document.getElementById('begin__menu__dropdown').style.opacity= '1';
    }
    if (menu%2!=0){
        document.getElementById('begin__menu__dropdown').style.opacity='0';
        document.getElementById('begin__ques').style.opacity='0';
        document.getElementById('begin__menu__dropdown__help').style.color = 'white';
        document.getElementById('begin__thanks').style.opacity= '0';      
        document.getElementById('begin__thanks').style.zIndex='0';
        ques=2;
    }
    menu++;
    
}

var ques=2;
function showQues(){
    if (ques%2==0){
        document.getElementById('begin__ques').style.opacity= '1';
        document.getElementById('begin__menu__dropdown__help').style.color = 'lawngreen';
        document.getElementById('begin__thanks').style.opacity= '0';      
        document.getElementById('begin__thanks').style.zIndex='0';
        document.getElementById('begin__accounts').style.opacity = '0';
        document.getElementById('begin__accounts').style.zIndex = '0';
        acc=2;
    }
    if (ques%2!=0){
        document.getElementById('begin__ques').style.opacity='0';
        document.getElementById('begin__menu__dropdown__help').style.color = 'white';
        document.getElementById('begin__thanks').style.opacity= '0';      
        document.getElementById('begin__thanks').style.zIndex='0';
    }
    ques++;
}
function hiddenQues(){
    document.getElementById('begin__ques').style.opacity='0';
    ques=2;
}


function showThanks() {
    document.getElementById('begin__thanks').style.opacity= '1';      
    document.getElementById('begin__thanks').style.zIndex='1';
    document.getElementById('begin__ques').style.opacity= '0';      
}
function hiddenThanks() {
    document.getElementById('begin__thanks').style.opacity= '0';      
    document.getElementById('begin__thanks').style.zIndex='0';
    ques=2;
    // document.getElementById('begin__ques').style.opacity= '1'; 
}

function showReset() {
    document.getElementById('begin__ques').style.opacity='0';
    document.getElementById('begin__menu__dropdown__help').style.color = 'white';
    document.getElementById('begin__thanks').style.opacity= '0';      
    document.getElementById('begin__thanks').style.zIndex='0';
    document.getElementById('begin__accounts').style.opacity = '0';
    document.getElementById('begin__accounts').style.zIndex = '0';
    ques=2;
    acc=2;
}

var acc=2;

function showAccounts(){
    if(acc==2){
        document.getElementById('begin__accounts').style.opacity = '1';
        document.getElementById('begin__accounts').style.zIndex = '1';
        document.getElementById('begin__ques').style.opacity='0';
        document.getElementById('begin__menu__dropdown__help').style.color = 'white';
        document.getElementById('begin__thanks').style.opacity= '0';      
        document.getElementById('begin__thanks').style.zIndex='0';
        ques=2;
        acc++;       
    }
    else {
        document.getElementById('begin__accounts').style.opacity = '0';
        document.getElementById('begin__accounts').style.zIndex = '0';
        acc--;
    }   
}
function hiddenAccounts(){
    document.getElementById('begin__accounts').style.opacity = '0';
    document.getElementById('begin__accounts').style.zIndex = '0';
    acc--;
}