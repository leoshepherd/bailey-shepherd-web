import './Home.css';
import {useEffect} from 'react'
import anime from 'animejs'

function Home() {
    useEffect(() => {
        let columns = Math.floor(document.body.clientWidth / 50);
        let rows = Math.floor(document.body.clientHeight / 50);

        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

        let toggle = false

        const handleOnClick = index => {
            toggle = !toggle;
            if (toggle == false){
                document.getElementById('intro').style.opacity = 0;
            }
            else{
                anime({
                    targets: '.intro',
                    opacity: 1,
                    delay: 3000
                })
            }
            anime({
                targets: '.tile',
                // backgroundColor: `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`,
                opacity: toggle ? 0 : 1,
                delay: anime.stagger(50, {
                    grid: [columns, rows],
                    from: index
                })
            })
        }

        const createTile = index => {
            const tile = document.createElement("div");

            tile.classList.add("tile");
            tile.onclick = e => handleOnClick(index)

            return tile;
        }
        const wrapper = document.getElementById('tiles')
        const createTiles = quantity => {
            Array.from(Array(quantity)).map((tile, index) => {
                wrapper.appendChild(createTile(index));
            })
        }

        const createGrid = () => {
            wrapper.innerHTML = "";
            columns = Math.floor(document.body.clientWidth / 50);
            rows = Math.floor(document.body.clientHeight / 50);

            console.log('columns: ', columns, ' rows: ', rows)

            wrapper.style.setProperty("--columns", columns)
            wrapper.style.setProperty("--rows", rows)

            createTiles(columns * rows);
        }
    createGrid();
    window.onresize = () => createGrid();
    });
    return (
        <body>
        <div className='intro' id='intro'>Welcome To My<br/>Portfolio</div>
        <div id='container'>
            <div id='tiles'></div>
        </div>
        </body>
    );
  }
  
  export default Home;