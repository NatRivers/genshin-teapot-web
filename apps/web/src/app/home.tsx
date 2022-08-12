export function Home() {
    return (
        <>
        <div id="home">
            <div id="circle"/>
            <img id='teapotlogo' alt="teapotlogo" src={require('../assets/teapotlogo.png')}/>
            <div id='in_out'>
                {/* <div id="img-container"> */}
                    <img id="expand" alt="exterior" src={require('../assets/exterior_home.png')}/>
                {/* </div> */}
                {/* <div id="img-container"> */}
                    <img id="expand" alt="interior" src={require('../assets/interior_home.png')}/>
                {/* </div> */}
            </div>
        </div>
        <style
            dangerouslySetInnerHTML={{
            __html: `
            
            h1 {
                color:yellow;
            }

            #home{
                width: 100%;
                height: 100%;
                background-color: black;
                position: fixed;
                margin: auto;
            }

            img {
                width: auto;
                height: 98%;
                padding-top: 5px;
                padding-bottom: 5px;
            }

            #teapotlogo {
                border-radius: 50%;
                width: 285px;
                height: auto;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1000;
            }

            #circle { 
                width:285px;
                height:285px;
                border-radius:50%;
                -moz-border-radius:50%;
                -webkit-border-radius:50%;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 999;
                border: solid 20px;
                border-color: black;
            }

            #in_out {
                width: auto;
                height: 100%;
                // padding-left: 45px;
                // padding-top: 5px;
                // border: solid 1px pink;
                margin-left: 3%;
                margin-top: 1%;
            }

            #expand:hover{
                transform: scale(1.06);
                cursor: pointer;
            }

            `,
        }}
        />

        </>
    )};

export default Home;