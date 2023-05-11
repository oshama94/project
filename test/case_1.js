const[mystyle , setmystyle] = useState( {
        color:'black',
        backgroundColor:'white'

    })

    const[btntext , setbtntext]=useState('Enable Dark Mode')

    const togglestyle = ()=>{
        if(mystyle.color==='black')
        {
            setmystyle=({
                color:'white',
                backgroundColor:'black'
        
            })
            setbtntext('Enable Light Mode')
        }
        else
        {

            setmystyle=({
                color:'black',
                backgroundColor:'white'
        
            })
            setbtntext('Enable Dark Mode')

        }
    }
