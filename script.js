// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* === FUNGSI DROPDOWN ABOUT US === */
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan kita merujuk butang dropdown yang betul
    const dropbtn = document.querySelector('.about-dropbtn'); 
    const dropdownContent = document.getElementById("aboutDropdown");

    if (dropbtn && dropdownContent) {
        // ... (Kekalkan kod fungsi toggle dan window.onclick sedia ada)
        dropbtn.addEventListener('click', function(event) {
            event.stopPropagation(); 
            dropdownContent.classList.toggle("show");
        });

        // Logik untuk menutup dropdown bila klik di luar
        window.onclick = function(event) {
            if (!event.target.matches('.about-dropbtn')) {
                const openDropdowns = document.getElementsByClassName("dropdown-content");
                let i;
                for (i = 0; i < openDropdowns.length; i++) {
                    const openDropdown = openDropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }
});


const hospitalData = [
    // Pastikan URL di sini adalah URL Apps Script yang betul
    // Jika tiada URL, biarkan string kosong seperti ini: ''
    //---N9-------
    { name: "Hospital Tuanku Ja'afar, Seremban", 
        id: "TUANKU-JAAFAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbw5z8hiFfNRr7h0pzzUkz_rE_UhMViC_lXCUN3Lx9TNidMTf1DI604OUUXg78z4lyH_hQ/exec" },
    { name: "Hospital Tuanku Ampuan Najihah, Kuala Pilah", 
        id: "KPL-KUALA-PILAH", sheetsUrl: "https://script.google.com/macros/s/AKfycbx86TShZamStBShImf--vrKO3Y7hFazfOK3Yj2w4avw-kN-pSTSLlaBJ2-ueL3rkG5IzA/exec" },
    { name: "Hospital Jempol", 
        id: "JMP-JEMPOL", sheetsUrl: "https://script.google.com/macros/s/AKfycbw22m7nvun08X51vQl-IwwmixJkC99-O4EBT1k2PBotXIRNR2oWC_t_8gsDhmVF03L9/exec" },
    { name: "Hospital Jelebu",
        id: "JLB-JELEBU", sheetsUrl:"https://script.google.com/macros/s/AKfycbwFH58vNZmoi5jBAMdpLmDVnQ35UUjw67A49fnz4aEKsEwoDhoUTfZA6fCGBPNAbRQ/exec" },
    { name: "Hospital Port Dickson", 
        id: "PDX-PORT-DICKSON", sheetsUrl:"https://script.google.com/macros/s/AKfycbwoqhCxcLIoRFJEpE9VTr7-OZAwzrvAnpiRFcC97KZ7FzFOdwAZmpdsekJ_KMch7WNalw/exec"},
    { name: "Hospital Tampin", 
        id: "TMP-TAMPIN", sheetsUrl: "https://script.google.com/macros/s/AKfycbzfLIF3Gad6vo6XO2QBeLvETeYLN3U-JHKeSFFY3zoxgQdWfE12Y9DEbTQDwsPuOcyLmg/exec" },

    // --- MELAKA ---
    { name: "Hospital Melaka", 
        id: "MKA-MLK", sheetsUrl: "https://script.google.com/macros/s/AKfycbwflF-mmh7j2B0Jld5m2jPbAkxcSYpj5859eGChboKoGJbrkU_aQSrwkAq_kwhA55h5GA/exec"},
    { name: "Hospital Jasin", 
        id: "JSN-JASIN", sheetsUrl: "https://script.google.com/macros/s/AKfycby7WncOTOR4xzk5RI6IrxNH3ZFXW3hUuLhE2sD5SSkYs4sk9OjHmyhXq4DoBBlyA8CDNQ/exec" },
    { name: "Hospital Alor Gajah", 
        id: "AGJ-ALOR-GAJAH", sheetsUrl: "https://script.google.com/macros/s/AKfycbwisD8IL7Zeaq2Gb4012hELmJyhpOytQIsKGg9U9vJEzOibkzAsRLFbe1b1HkKtJ1t5/exec" },

    // --- JOHOR ---
    { name: "Hospital Sultanah Aminah, Johor Bahru", 
        id: "HSA-JOHOR", sheetsUrl: "https://script.google.com/macros/s/AKfycbyQ2f4xFajDR9XG4D7kAqfOL6IzToWQbu6mUgsbg1i2Mr5rHIZg0nMjewtgfneAAd2OFA/exec" },
    { name: "Hospital Sultan Ismail, Johor Bahru", 
        id: "HSI-JOHOR", sheetsUrl: "https://script.google.com/macros/s/AKfycbwPfu-vAlnNsmq5YiOYueczIN2JN13HU8z0ZuWrfE3euRtLhNWpbMrYFEpZzfuNwaTE/exec" },
    { name: "Hospital Pakar Sultanah Fatimah, Muar", 
        id: "HPSF-MUAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbzLerCUVn8X7ThwsCqAXXnVdqgp7GlrjIPjbUEmoEmDbI_3Go-Ig-GlkpFb5BoUUsPHBw/exec" },
    { name: "Hospital Kluang", 
        id: "KLN-KLUANG", sheetsUrl: "https://script.google.com/macros/s/AKfycbwczPchKCENSep7wK1L8cO1_GxxnnN3g2zNA69y9K5x4bzHpHh3_fioJij3aCj8OwUEJw/exec" },
    { name: "Hospital Batu Pahat", 
        id: "BPH-BATU-PAHAT", sheetsUrl: "https://script.google.com/macros/s/AKfycbztCnzv3qj8_Tu64NvOvqfE-rqtk-nquJpnKA0sf53M-nkQ4yzzaqdWTbDZ3WcWrCLo/exec" },
    { name: "Hospital Pontian", 
        id: "PON-PONTIAN", sheetsUrl: "https://script.google.com/macros/s/AKfycbxWOVUvEHbFEykOk5nH0Vfx6leFTaotWgXDybhuctZ4MFevRUiO7WLiM8PBOJlkKZqOMg/exec" },
    { name: "Hospital Segamat", 
        id: "SEG-SEGAMAT", sheetsUrl: "https://script.google.com/macros/s/AKfycbzcv8V7Y4uieUpg76T20-fw3EfudaD-vba7ibqjwEPJljwD9y86JdVkmf4jlIEQygpG/exec" },
    { name: "Hospital Temenggong Seri Maharaja Tun Ibrahim, Kulai", 
        id: "HTSMTI-KULAI", sheetsUrl: "https://script.google.com/macros/s/AKfycbxCm_2vDFwx0Gum1G1JQHRnOIVXrxkEKpcTXhhQ9YkdE6W0rV1g8zcQ5p641hekV5h7qg/exec" },
    { name: "Hospital Kota Tinggi", 
        id: "KTG-KOTA-TINGGI", sheetsUrl: "https://script.google.com/macros/s/AKfycbytKhxG3a8hhBW89lCFZOvFJwRmk1LSqqhpGQgloRdzElJRi6t9mWxlQwgbNo4IbEk8/exec" },
    { name: "Hospital Mersing", 
        id: "MER-MERSING", sheetsUrl: "https://script.google.com/macros/s/AKfycbyQVnzXjIIDDRcQXGXdlVOQVTBqOVTxKes8BuMNaLnyx-yUoobjyOw8enXaNNtHgZdbCA/exec" },
    { name: "Hospital Tangkak", 
        id: "TGK-TANGKAK", sheetsUrl: "https://script.google.com/macros/s/AKfycbzH_bt-iawe75_UxWCZzPzW799y8PLVEopJT9NRTMWLi_HMrFSCcd382w31stcBZ3V7/exec" },
    { name: "Makmal Kesihatan Awam Johor", 
        id: "MKJ-JB", sheetsUrl: "https://script.google.com/macros/s/AKfycbzvLSmQRXkj1tJdz8_teaHSLxqa1Xu5aClm-uJDr9S7t76c3ONwBX4N_4ep0vkdjcPE/exec" },
    { name: "Hospital Permai", 
        id: "PER-PERMAI", sheetsUrl: "https://script.google.com/macros/s/AKfycbzFH1CmQWn4-gnfC8TJyX1N10QH_Nt9SxtJAKlQ1X5luq74d0fFsy9iA5gYfSmy1V55xw/exec" },
    { name: "Hospital Pasir Gudang", 
        id: "PGD-PASIR-GUDANG", sheetsUrl: "https://script.google.com/macros/s/AKfycbyoVOiKolxMtnW5Eeux_qnWhnRpNVdB-N8k3GoniLRGdfTjndZzSRFLGpDqGwftrH7U9w/exec" },
     { name: "Hospital Pantai", 
        id: "PAN-Pantai", sheetsUrl: "" },
    // Tambah hospital di sini dengan ID dan URL mereka
];

// const criticalSystems = [
//     { name: "Electrical Supply", id: "Electrical Supply"},
//     { name: "Generator Set", id: "Generator Set"},
//     { name: "Water Supply System", id: "Water Supply System"},
//     { name: "Autoclave", id: "Autoclave"},
//     { name: "Medical Gas Pipeline System", id: "Medical Gas Pipeline System"},
//     { name: "Vertical Transportation", id: "Lift"},
//     { name: "Air Handling Unit", id: "Air Handling Unit"},
//     { name: "BAS System", id: "BAS System"},
//     { name: "Chiller And Cooling Tower", id: "Chiller And Cooling Tower" },
//     { name: "Fire Protection System", id: "Fire Protection System" },
// ];

const criticalSystems = [
    { name: "MRI Scanner", id: "MRI Scanner"},
    { name: "CT Scanner", id: "CT Scanner"},
    { name: "PET Scanner", id: "PET Scanner"},
    { name: "Mammo Unit", id: "Mammo Unit"},
    { name: "Angio System", id: "Angio System"},
    { name: "Fluoro MP", id: "Fluoro MP"},
    { name: "Water Purifier", id: "Water Purifier"},
    { name: "Radiotherapy", id: "Radiotherapy"},
    { name: "Brachytherapy", id: "Brachytherapy" },
    { name: "Others", id: "Others" }
];

//---------------------------------link submission form--------------------------------------------------
const submissionForms = {
    //NEGERI SEMBILAN
    'TUANKU-JAAFAR_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_Others': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_Angio System': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',
    'TUANKU-JAAFAR_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/HTJ.html',

    'JMP-JEMPOL_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_Others': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_Angio System': 'https://mymedivest.github.io/BEMS-Form/JMP.html',
    'JMP-JEMPOL_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/JMP.html',

    'TMP-TAMPIN_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_Others': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_Angio System': 'https://mymedivest.github.io/BEMS-Form/TMP.html',
    'TMP-TAMPIN_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/TMP.html',

    'PDX-PORT-DICKSON_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_Others': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_Angio System': 'https://mymedivest.github.io/BEMS-Form/PDX.html',
    'PDX-PORT-DICKSON_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/PDX.html',

    'JLB-JELEBU_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_Others': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_Angio System': 'https://mymedivest.github.io/BEMS-Form/JLB.html',
    'JLB-JELEBU_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/JLB.html',

    'KPL-KUALA-PILAH_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_Others': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_Angio System': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    'KPL-KUALA-PILAH_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/KPL.html',
    
    //MELAKA
    'MKA-MLK_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_Others': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_Angio System': 'https://mymedivest.github.io/BEMS-Form/MKA.html',
    'MKA-MLK_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/MKA.html',

    'AGJ-ALOR-GAJAH_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_Others': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_Angio System': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',
    'AGJ-ALOR-GAJAH_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/AGJ.html',

    'JSN-JASIN_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_Others': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_Angio System': 'https://mymedivest.github.io/BEMS-Form/JSN.html',
    'JSN-JASIN_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/JSN.html',

    //JOHOR DARUL TAKZIM (JDT)
    'HSA-JOHOR_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_Others': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_Angio System': 'https://mymedivest.github.io/BEMS-Form/HSA.html',
    'HSA-JOHOR_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/HSA.html',

    'HSI-JOHOR_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_Others': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_Angio System': 'https://mymedivest.github.io/BEMS-Form/HSI.html',
    'HSI-JOHOR_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/HSI.html',

    'HPSF-MUAR_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_Others': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_Angio System': 'https://mymedivest.github.io/BEMS-Form/MUR.html',
    'HPSF-MUAR_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/MUR.html',

    'KLN-KLUANG_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_Others': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_Angio System': 'https://mymedivest.github.io/BEMS-Form/KLN.html',
    'KLN-KLUANG_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/KLN.html',

    'BPH-BATU-PAHAT_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_Others': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_Angio System': 'https://mymedivest.github.io/BEMS-Form/BPH.html',
    'BPH-BATU-PAHAT_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/BPH.html',

    'PON-PONTIAN_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_Others': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_Angio System': 'https://mymedivest.github.io/BEMS-Form/PON.html',
    'PON-PONTIAN_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/PON.html',

    'SEG-SEGAMAT_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_Others': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_Angio System': 'https://mymedivest.github.io/BEMS-Form/SGT.html',
    'SEG-SEGAMAT_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/SGT.html',

    'HTSMTI-KULAI_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_Others': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_Angio System': 'https://mymedivest.github.io/BEMS-Form/KUL.html',
    'HTSMTI-KULAI_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/KUL.html',

    'KTG-KOTA-TINGGI_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_Others': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_Angio System': 'https://mymedivest.github.io/BEMS-Form/KTG.html',
    'KTG-KOTA-TINGGI_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/KTG.html',

    'MER-MERSING_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_Others': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_Angio System': 'https://mymedivest.github.io/BEMS-Form/MER.html',
    'MER-MERSING_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/MER.html',

    'TGK-TANGKAK_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_Others': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_Angio System': 'https://mymedivest.github.io/BEMS-Form/TGK.html',
    'TGK-TANGKAK_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/TGK.html',

    'MKJ-JB_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_Others': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_Angio System': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',
    'MKJ-JB_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/MKJ.html',

    'PER-PERMAI_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_Others': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_Angio System': 'https://mymedivest.github.io/BEMS-Form/PER.html',
    'PER-PERMAI_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/PER.html',

    'PGD-PASIR-GUDANG_MRI Scanner': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_CT Scanner': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_Mammo Unit': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_Fluoro MP': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_Others': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_Brachytherapy': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_PET Scanner': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_Water Purifier': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_Angio System': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
    'PGD-PASIR-GUDANG_Radiotherapy': 'https://mymedivest.github.io/BEMS-Form/PGD.html',
};

// Fungsi untuk mengemas kini kad hospital sedia ada di halaman utama
function updateHospitalCards() {
    const fetchPromises = [];
    const loadingSpinner = document.getElementById('loading-spinner');

    if (loadingSpinner) {
        loadingSpinner.style.display = 'block';
    }

    hospitalData.forEach(hospital => {
        // Cari elemen kad yang sedia ada
        const cardElement = document.getElementById(`card-${hospital.id}`);
        if (cardElement && hospital.sheetsUrl) {
            const fetchPromise = fetch(hospital.sheetsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const functioningCount = data.filter(item => item.Status && item.Status.trim().toUpperCase() === 'FUNCTIONING').length;
                    const notFunctioningCount = data.filter(item => item.Status && item.Status.trim().toUpperCase() === 'NOT FUNCTIONING').length;

                    // Cari span dalam kad dan kemas kini nilainya
                    const functioningSpan = cardElement.querySelector('.status-FUNCTIONING');
                    const notFunctioningSpan = cardElement.querySelector('.status-NOT-FUNCTIONING');

                    if (functioningSpan) {
                        functioningSpan.textContent = `FUNCTIONING: ${functioningCount}`;
                    }
                    if (notFunctioningSpan) {
                        notFunctioningSpan.textContent = `NOT FUNCTIONING: ${notFunctioningCount}`;
                    }
                })
                .catch(error => {
                    console.error(`Error fetching data for ${hospital.name}:`, error);
                    const statusContainer = cardElement.querySelector('.status-container');
                    if (statusContainer) {
                        statusContainer.innerHTML = '<p style="color:red; font-size: 0.8em; margin: 0; padding: 0;">Data not available</p>';
                    }
                });
            fetchPromises.push(fetchPromise);
        } else if (cardElement) {
             const statusContainer = cardElement.querySelector('.status-container');
             if (statusContainer) {
                 statusContainer.innerHTML = '<p style="color:red; font-size: 0.8em; margin: 0; padding: 0;">No URL API provided</p>';
             }
        }
    });

    Promise.all(fetchPromises.map(p => p.catch(e => e))).finally(() => {
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
    });
}

// Fungsi untuk mengambil data dari Google Sheets API
async function fetchAssetData(sheetsUrl, systemId) {
    try {
        const response = await fetch(sheetsUrl);
        const data = await response.json();
        const filteredData = data.filter(item => (item['Type of System'] || '').trim().toUpperCase() === (systemId || '').trim().toUpperCase());
        return filteredData;
    } catch (error) {
        console.error('Error fetching data from Google Apps Script:', error);
        return [];
    }
}

// Logik untuk halaman hospital
async function setupHospitalPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalId = urlParams.get('hosp');
    const systemId = urlParams.get('sys');

    const mainContent = document.querySelector('main');
    const headerTitle = document.getElementById('header-title');
    const backButton = document.getElementById('back-button');

    const currentHospital = hospitalData.find(hosp => hosp.id === hospitalId);
    const sheetsUrl = currentHospital ? currentHospital.sheetsUrl : null;

    // --- Logik untuk halaman senarai sistem kritikal ---
    if (!systemId) {
        if (backButton) {
            backButton.style.display = 'none';
        }
        headerTitle.textContent = `Type of Critical System - ${currentHospital ? currentHospital.name : hospitalId}`;
        // Jangan hapuskan kandungan utama HTML hospital-page.html jika ia mengandungi struktur menu, 
        // tetapi kita akan ganti dengan grid yang dijana JS jika dataSheets ada.

        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital. Please contact Nazree (012-3456495).</p>`;
            return;
        }

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please wait while the system load the data...</p>';

        try {
            const response = await fetch(sheetsUrl);
            const allData = await response.json();

            // Sediakan tajuk
            mainContent.innerHTML = `<h2 class="main-title"></h2>`;
            const cardGrid = document.createElement('div');
            cardGrid.className = 'system-grid'; 

            // --- PETA LALUAN GAMBAR (MAP) ---
            const systemImageMap = {
                "MRI Scanner": "Gambar-System/MRI.webp", 
                "CT Scanner": "Gambar-System/CT-1.webp",
                "PET Scanner": "Gambar-System/PET-2.webp",
                "Mammo Unit": "Gambar-System/Mammo.webp",
                "Angio System": "Gambar-System/Angio-1.webp",
                "Fluoro MP": "Gambar-System/X-Ray-1.webp",
                "Water Purifier": "Gambar-System/WaterPurifier.webp",
                "Radiotherapy": "Gambar-System/Radiotherapy.webp",
                "Brachytherapy": "Gambar-System/Brachytherapy.webp", 
                "Others": "Gambar-System/Others.webp", 
            };

          // From line 505 to 521, the script are added to the original scripts, while for line 523, the function is changed a bit. The reason is so that, for JLB, only 8 critical systems show up instead of 10
          // Inside setupHospitalPage() function, in the section where system cards are generated
          // Find this line: criticalSystems.forEach(system => {

          // Replace that entire loop with this conditional logic:

          // Check if current hospital is JLB and filter out specific systems
          let systemsToShow = criticalSystems;

          if (hospitalId === 'TUANKU-JAAFAR') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['PET Scanner', 'Mammo Unit', 'Angio System', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'KPL-KUALA-PILAH') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'JMP-JEMPOL') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'JLB-JELEBU') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'PDX-PORT-DICKSON') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'TMP-TAMPIN') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'MKA-MLK') {
            // Remove Medical Gas Pipeline System and BAS System (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'PET Scanner', 'Angio System', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }
          
          if (hospitalId === 'AGJ-ALOR-GAJAH') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

           if (hospitalId === 'JSN-JASIN') {
            // Remove Medical Gas Pipeline System and BAS System (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

        
          if (hospitalId === 'HSA-JOHOR') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['Mammo Unit', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'HSI-JOHOR') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['PET Scanner', 'Angio System',  'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'HPSF-MUAR') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['PET Scanner', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'KLN-KLUANG') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'PET Scanner', 'Angio System', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'BPH-BATU-PAHAT') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'PET Scanner', 'Angio System', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'PON-PONTIAN') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'SEG-SEGAMAT') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'HTSMTI-KULAI') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'KTG-KOTA-TINGGI') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'MER-MERSING') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'TGK-TANGKAK') {
            // Remove Medical Gas Pipeline System and BAS System (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }
 
          // if (hospitalId === 'MKJ-JB') {
          //   // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
          //   systemsToShow = criticalSystems.filter(system => {
          //     // List the system IDs to exclude for JLB hospital
          //     const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'X-Ray System', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
          //     return !excludedSystems.includes(system.id);
          //   });
          // }

          if (hospitalId === 'PER-PERMAI') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Water Purifier', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'PGD-PASIR-GUDANG') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['PET Scanner', 'Angio System', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          }

          if (hospitalId === 'PAN-Pantai') {
            // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
            systemsToShow = criticalSystems.filter(system => {
              // List the system IDs to exclude for JLB hospital
              const excludedSystems = ['MRI Scanner', 'CT Scanner', 'PET Scanner', 'Mammo Unit', 'Angio System', 'Fluoro MP', 'Radiotherapy', 'Brachytherapy', 'Others']; // IDs to remove
              return !excludedSystems.includes(system.id);
            });
          } 

            systemsToShow.forEach(system => {
                const card = document.createElement('a');
                card.className = 'system-card'; 
                card.href = `hospital-page.html?hosp=${hospitalId}&sys=${system.id}`;

                // --- START: TAMBAH OVERLAY ---
                const overlay = document.createElement('div');
                overlay.className = 'card-overlay';
                card.appendChild(overlay);
                // --- END: TAMBAH OVERLAY ---

                // KOD GAMBAR
                const img = document.createElement('img');
                const imageSrc = systemImageMap[system.id] || "Gambar/default.webp"; 
                img.src = imageSrc;
                img.alt = system.name;
                img.className = 'card-image';
                card.appendChild(img);

                // 3. TAMBAH TAJUK (z-index: 2)
                const systemName = document.createElement('span');
                systemName.className = 'card-title';
                systemName.textContent = system.name;
                card.appendChild(systemName);
                
                // Kira status untuk sistem ini dari data yang telah diambil
                const systemData = allData.filter(item => (item['Type of System'] || '').trim().toUpperCase() === (system.id || '').trim().toUpperCase());
                const functioningCount = systemData.filter(item => (item.Status || '').trim().toUpperCase() === 'FUNCTIONING').length;
                const notFunctioningCount = systemData.filter(item => (item.Status || '').trim().toUpperCase() === 'NOT FUNCTIONING').length;

                // Tambah status ke kad
                const statusContainer = document.createElement('div');
                statusContainer.className = 'status-container'; 

                const spanF = document.createElement('span');
                spanF.className = 'status-box status-FUNCTIONING';
                spanF.textContent = `FUNCTIONING: ${functioningCount}`;

                const spanNF = document.createElement('span');
                spanNF.className = 'status-box status-NOT-FUNCTIONING';
                spanNF.textContent = `NOT FUNCTIONING: ${notFunctioningCount}`;

                statusContainer.appendChild(spanF);
                statusContainer.appendChild(spanNF);
                
                card.appendChild(statusContainer);
                
                cardGrid.appendChild(card);
            });
            mainContent.appendChild(cardGrid);

        } catch (error) {
            console.error("Fetch error:", error);
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">Failed to retrieve data. Please check the URL or contact Nazree (012-3456495).</p>`;
        }
    }
    // --- Logik untuk halaman butiran aset ---
    else {
        // Pautan butang "Back"
        if (backButton) {
            backButton.style.display = 'inline-block';
            backButton.href = `hospital-page.html?hosp=${hospitalId}`;
        }

        const currentSystem = criticalSystems.find(system => system.id === systemId);
        if (currentSystem) {
            headerTitle.textContent = `${currentSystem.name} - ${currentHospital.name}`;
        } else {
            headerTitle.textContent = systemId;
        }

        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital.</p>`;
            return;
        }

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please be patient, data is being loaded</p>';

        const data = await fetchAssetData(sheetsUrl, systemId);
        mainContent.innerHTML = '';

        const formKey = `${hospitalId}_${systemId}`;
        const formUrl = submissionForms[formKey];

        const formButton = document.createElement('a');
        formButton.className = 'form-button';
        formButton.textContent = 'Go to Submission Form';
        formButton.href = formUrl ? formUrl : '#';
        formButton.target = '_blank';
        if (!formUrl) {
            formButton.style.opacity = '0.5';
            formButton.style.cursor = 'not-allowed';
            formButton.textContent = 'Form Not Available';
        }
        mainContent.appendChild(formButton);

        const locations = {};
        data.forEach(item => {
            const location = item['Location'];
            if (!locations[location]) {
                locations[location] = [];
            }
            locations[location].push(item);
        });

        if (Object.keys(locations).length === 0) {
            mainContent.innerHTML += `<p style="text-align:center; color:red; font-weight:bold;">No data found for this system! 😲😤.</p>`;
            return;
        }

        for (const location in locations) {
            const locationSection = document.createElement('section');
            locationSection.className = 'location-section';

            const locationTitle = document.createElement('h2');
            locationTitle.textContent = location;
            locationSection.appendChild(locationTitle);

            const cardGrid = document.createElement('div');
            cardGrid.className = 'card-grid';

            locations[location].forEach(item => {
                let statusClass = '';
                const itemStatus = item['Status'] ? item['Status'].trim().toUpperCase() : '';

                if (itemStatus === 'FUNCTIONING') {
                    statusClass = 'status-FUNCTIONING';
                } else if (itemStatus === 'NOT FUNCTIONING') {
                    statusClass = 'status-NOT-FUNCTIONING';
                }

                const rawDate = item['Last Update'];
                let formattedDate = '';
                if (rawDate) {
                    try {
                        const dateObj = new Date(rawDate);
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const day = String(dateObj.getDate());
                        const month = monthNames[dateObj.getMonth()];
                        const year = String(dateObj.getFullYear()).slice(-2);
                        let hours = dateObj.getHours();
                        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
                        const seconds = String(dateObj.getSeconds()).padStart(2, '0');
                        const ampm = hours >= 12 ? 'PM' : 'AM';
                        hours = hours % 12;
                        hours = hours ? hours : 12;

                        formattedDate = `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
                    } catch (e) {
                        console.error('Failed to parse date:', rawDate);
                        formattedDate = rawDate;
                    }
                } else {
                    formattedDate = 'N/A';
                }

                const card = document.createElement('div');
                card.className = 'asset-card';
                card.innerHTML = `
                    <h3>${item['Asset']}</h3>
                    <p><strong>Status:</strong> <span class="status-box ${statusClass}">${item['Status']}</span></p>
                    <p><strong>Remark:</strong> ${item['Remark']}</p>
                    <p><strong>Action:</strong> ${item['Action']}</p>
                    <p class="last-update">Last Update: ${formattedDate}</p>
                `;
                cardGrid.appendChild(card);
            });

            locationSection.appendChild(cardGrid);
            mainContent.appendChild(locationSection);
        }
    }
}

// Panggil fungsi yang betul berdasarkan halaman
if (window.location.pathname.endsWith('hospital-page.html')) {
    document.addEventListener('DOMContentLoaded', setupHospitalPage);
} else if (window.location.pathname === '/' || window.location.pathname.endsWith('Critical-System.html')) {
    document.addEventListener('DOMContentLoaded', updateHospitalCards);
}
