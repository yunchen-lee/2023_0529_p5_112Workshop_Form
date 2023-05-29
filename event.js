let sendButton = document.querySelector('button');

function send() {
    let name = document.querySelector('#nameValue').value;
    let phone = document.querySelector('#phoneValue').value;
    let mail = document.querySelector('#mailValue').value;
    let meat = "";
    let vege = "";
//     if (document.querySelector('#foodValue-meat').checked) meat = document.querySelector('#foodValue-meat').value;;
//     if (document.querySelector('#foodValue-vegetarian').checked) vege = document.querySelector('#foodValue-vegetarian').value;;
    let media = "";
    let friend = "";
    if (document.querySelector('#infosource-media').checked) media = document.querySelector('#infosource-media').value;
    if (document.querySelector('#infosource-friend').checked) friend = document.querySelector('#infosource-friend').value;
    let code = document.querySelector('#codeValue').value;

    $.ajax({
        url: "https://script.google.com/a/macros/arch.nycu.edu.tw/s/AKfycbzpNafjAV0eJNkdiQGXcgsAFwEX2wuefnv6vWz4B0EihtEls_7IBvTWu3e4WjL2M9PT/exec",
        data: {
            "name": name,
            "phone": phone,
            "mail": mail,
            "foodMeat": meat,
            "foodVege": vege,
            "infoMedia": media,
            "infoFriend": friend,
            "codeSkill": code
        },
        // success: function(response) {
        //     if (response == "成功") {
        //         alert("感謝您的填寫");
        //     }
        // },
    });

    document.querySelector('#btn').innerHTML = '已收到您回覆的表單';
    // document.querySelector('#btn').innerText = 'Hide Result';
    // document.querySelector('#btn').textContent = 'Hide Result';
};

sendButton.addEventListener('click', send);
