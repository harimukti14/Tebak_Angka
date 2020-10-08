// var tanya =true;
// while(tanya){
//     alert('Tebak Angka 1 - 10 \nKamu punya 3  kesempatan');
//     // membgnkitkan pilihan user
//     // menentukan bilangan random
//     // membangkitkan pilihan komp
//     var komp = Math.random();
//     if (komp <= 0.1){
//         komp= 1;
//     } else if(komp >0.1 && komp <=0.2){
//         komp= 2;
//     } else if(komp >0.2 && komp <=0.3){
//         komp= 3;
//     } else if(komp >0.3 && komp <=0.4){
//         komp= 4;
//     } else if(komp >0.4 && komp <=0.5){
//         komp= 5;
//     } else if(komp >0.5 && komp <=0.6){
//         komp= 6;
//     } else if(komp >0.6 && komp <=0.7){
//         komp= 7;
//     } else if(komp >0.7 && komp <=0.8){
//         komp= 8;
//     } else if(komp >0.8 && komp <=0.9){
//         komp= 9;
//     } else{
//         komp= 10;
//     }

//     // menentukan rules
 
//     // for (var kes = 2; kes>=0; kes--){
//     //     var p = prompt('Masukkan Angka Tebakan');

//     //     if(p < komp){
//     //         if (kes ==0){
//     //             alert('Anda GAGAL!! \nangka yg dicari adalah '+komp);
//     //         } else{
//     //             alert('Terlalu rendah'+ ' \nanda punya ' + kes + ' kesempatan');       
//     //             }
//     //     } else if(p > komp){
//     //         if (kes ==0){
//     //             alert('Anda GAGAL!! \nangka yg dicari adalah '+komp);
//     //         } else{
//     //             alert('Terlalu tinggi'+ ' \nanda punya'+ kes+ ' kesempatan');
//     //             }
//     //     } else if(p== komp){
//     //         alert('Tebakan anda benar \nAngka yg dicari adalah ' +komp);
//     //         break;
//     //     } 
        
//     // }

//     for (var kes = 2; kes>=0; kes--){
//         var p = prompt('Masukkan Angka Tebakan');
//         var hasil = ('Anda GAGAL!! \nangka yg dicari adalah '+komp);

//         if(p < komp){
//             if (kes ==0){
//                 alert(hasil);
//             } else{
//                 alert('Terlalu rendah'+ ' \nanda punya ' + kes + ' kesempatan');       
//                 }
//         } else if(p > komp){
//             if (kes ==0){
//                 alert(hasil);
//             } else{
//                 alert('Terlalu tinggi'+ ' \nanda punya'+ kes+ ' kesempatan');
//                 }
//         } else if(p== komp){
//             alert('Tebakan anda benar \nAngka yg dicari adalah ' +komp);
//             break;
            
//         } 
        
//     }
    
    
//     tanya=confirm('main lagi?');
// }
// alert('Terima kasih sudah bermain');
// // menentukan hasil

var i = Math.floor(Math.random() * 10) + 1

console.log(i);