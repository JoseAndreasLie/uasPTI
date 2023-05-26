const colorPicker = document.getElementById('colorPicker');

let html = '';

const getColorName = () => {
    let seedColor = colorPicker.value.replace('#', '');

    console.log(seedColor);

    fetch(`https://www.thecolorapi.com/id?hex=${seedColor}`)
        .then((res) => res.json())
        .then((data) =>  console.log(data.name.value),
            // console.log(data.rgb.r)
            // let colors = '';
            // data.colors.forEach((e) => {
            //     colors = ${e.name.value};
            );
};



form.addEventListener('submit', (e) => {
    e.preventDefault();
    getColorName();
});