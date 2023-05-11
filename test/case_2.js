const[mystyle, setMystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
})

const[btnText, SetBtnText] = useState("Enable Dark mode")

const toggleStyle = () => {
    if (mystyle.color === "black") {
        setMystyle({
            color: "white",
            backgroundColor: "black",
            border: "1px solid white",
        })
        SetBtnText("Enable Light Mode")
    }

    else {
        setMystyle({
            color: 'black',
            backgroundColor: 'white'
        })
        SetBtnText("Enable Dark Mode")
    }
}