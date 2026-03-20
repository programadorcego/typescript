const icons = {
    home: "./assets/home.svg",
    add: "./assets/add.svg",
    delete: "./assets/delete.svg",
}

type Icon = typeof icons;

const icon: keyof Icon = "home"
console.log(icons[icon])