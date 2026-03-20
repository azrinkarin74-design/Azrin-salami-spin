function startSpin() {
    const box = document.getElementById('box');
    const spinBtn = document.querySelector('.spin');
    
    spinBtn.classList.add('hidden'); // স্পিন বাটন লুকিয়ে ফেলা
    
    // কম দামি সালামির ডিগ্রী (চাকার পজিশন অনুযায়ী)
    const options = [45, 135, 225, 315]; // ১, ২, ৫, ১০ টাকার পজিশন
    
    // র‍্যান্ডমলি একটি কম দামি সালামি বেছে নেওয়া
    const selectedOption = options[Math.floor(Math.random() * options.length)];
    
    // চাকাটিকে ৫ বার (৫ * ৩৬০ = ১৮০০) ঘুরিয়ে তারপর ওই ডিগ্রী তে থামানো
    const totalRotation = 1800 + selectedOption; 
    
    // চাকাটি ঘোরানো
    box.style.transform = `rotate(${totalRotation}deg)`;
    
    // ঘোরার পর (৫ সেকেন্ড পর) রেজাল্ট দেখানো
    setTimeout(() => {
        const resultArea = document.getElementById('result-area');
        const msg = document.getElementById('message');
        
        let amount = "";
        if (selectedOption === 45) amount = "১ টাকা";
        if (selectedOption === 135) amount = "২ টাকা";
        if (selectedOption === 225) amount = "৫ টাকা";
        if (selectedOption === 315) amount = "১০ টাকা";
        
        msg.innerText = `অভিনন্দন! তুমি পেয়েছ ${amount}!`;
        resultArea.classList.remove('hidden');
    }, 5000); // style.css এর transition টাইম (5s) অনুযায়ী
}