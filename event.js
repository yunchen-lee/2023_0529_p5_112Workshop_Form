let sendButton = document.querySelector('button');

function send() {
    let name = document.querySelector('#nameValue').value;
    let phone = document.querySelector('#phoneValue').value;
    let mail = document.querySelector('#mailValue').value;
    let sch = document.querySelector('#schValue').value;

    let meat = "";
    let vege = "";
    //     if (document.querySelector('#foodValue-meat').checked) meat = document.querySelector('#foodValue-meat').value;;
    //     if (document.querySelector('#foodValue-vegetarian').checked) vege = document.querySelector('#foodValue-vegetarian').value;;
    let media = "";
    let friend = "";
    let infosch = "";
    if (document.querySelector('#infosource-media').checked) media = document.querySelector('#infosource-media').value;
    if (document.querySelector('#infosource-friend').checked) friend = document.querySelector('#infosource-friend').value;
    if (document.querySelector('#infosource-sch').checked) infosch = document.querySelector('#infosource-sch').value;

    let code = document.querySelector('#codeValue').value;

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwZr3h2rjHbWXF4Oe7NwF1J9cvPUfbOOx05wr8ixTTp6zN9cCvtQYYRswKW6j8V-gFW/exec",
        data: {
            "name": name,
            "phone": phone,
            "mail": mail,
            "school": sch,
            "foodMeat": meat,
            "foodVege": vege,
            "infoMedia": media,
            "infoFriend": friend,
            "infoSch": infosch,
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
