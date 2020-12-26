    
    sudo su                                   // root hesabina gectim

1)	apt-get update                            // Bu komut, yerel yazılım listenizi yeniler ve daha yeni revizyonları ve güncellemeleri not eder. Çekirdeğin daha yeni bir sürümü varsa, komut onu bulur    ve   indirme ve kurulum için işaretler.

2)	apt-get upgrade                           //Ubuntu sisteminde yüklü olan tüm paketlerin en yeni sürümlerini yüklemek için kullanılır.

3)	snap install --classic code               // visual studio code kurmak icin

4)	wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb             //google chrome indirir
    apt install ./google-chrome-stable_current_amd64.deb     // chrome kurar
    google-chrome                              //chrome u acar.
5)  snap install libreoffice                   //LibreOffice 7.0 kurar

6)	adduser guest                              // guest adinda yeni kullanici olusturur
    addgroup guestlist                         //  guestlist adinda bir grup olusturur id verir

7)	vim index.html                             //  vim de dosya acar       
    i                             // yaziya baslar esc ile cikar
    wq                            //dosyayi kaydeder  ve cikar

8)	nano app.js                               //  nano da js dosyasi acar
    ctrl o                        // kaydet
    ctrl x                        //cikar

9)	chown guest app.js                        // guest kullanicisina app.js dosyasi icin yetki verilir
    chown guest:guestlist app.js              //app.js dosyasinin grubunu guestlist olarak degistirdik

10)	chmod u=rwx,og=rwx index.html             //   user ve group a rwx yetkisi verdik

11)	ls -l                                     //detayli  listeleme kisasi ll

12)	alias cl=clear                            // bilinen clear komutunu cl olarak degistirir.
    df                                        // diskin ne kadarinin bos oldugunu gosterir
    history                                   //yazilan shell komutlarini listeler
    date                                      //  tarih saat gosterir.
    grep dosya dosya.js                       //dosya.js dosyasinda dosya kelimesini arar ve o satiri gosterir
    ps                                        // calisan programlari gosterir
    kill process id                           //programi kapatir
    kill -9 id                                //  sormadan kapatir
    tar -czvf arsiv.tar.gz./arsiv/            // arsiv klasorunu sikistirir.
    -c                            //arsiv olustur 
    -z                            // sikistir
    -v                            //detaylari  terminalde goster
    f                             // isim verir   
    tar -xvf arsiv.tar.gz                    // arsiv.tar.gz sikistirmadanki haline dondu
    top                                      //kullanilan processlerin yuzdelerini kullanma paylarini verir. (ekrandan ckmak icin ctrl +c veya q harfi )
    du -h                                    // klasor ne kadar yer kapliyor kac dosya var bilgisini verir
    head add.js                              // add.js dosyasinin ilk on satirini gosterir
    head -n 1 add.js                         // sadece 1 satir gosterir
    tail add.js                              // add.js dosyasinin sondan on satirini gosterir
    tail -n 1 add.js                         // sondan sadece 1 satir gosterir
    wget url                                 // url si verilen bir dosyayi indirmek icin kullanilir
    find                                     //bulunduğunuz dizindeki dosya ve dizinleri gösterir.
    find Belgeler                            // belgeler deki dosyalari gosterir.
    find -name app.js                        //app.js dosyasinin nerede oldugunu gosterir
