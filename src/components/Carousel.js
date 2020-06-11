import React from 'react';
import instasrc from '../assets/images/insta.jpg'
import linkedinsrc from '../assets/images/linkedin.jpg'
import gitsrc from '../assets/images/githubimage.jpg'
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub Profile',
                    subTitle: 'See my Projects!',
                    imgSrc: gitsrc,
                    link: 'https://github.com/hasan-umanitoba',
                    selected: false
                }
                ,
                {
                    id: 1,
                    title: 'Linkedin Profile',
                    subTitle: 'Let\'s Connect?',
                    imgSrc: linkedinsrc,
                    link: 'https://www.linkedin.com/in/hasansal/',
                    selected: false
                }
                ,
                {
                    id: 2,
                    title: 'Instagram Profile',
                    subTitle: 'Hit me Up!',
                    imgSrc: instasrc,
                    link: 'https://www.instagram.com/hasansal_/',
                    selected: false
                }

            ]

        }
    }

    handle_Card_Click = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (id !== item.id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeCardItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handle_Card_Click(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeCardItems(this.state.items)}
                </Row>


            </Container>);

    }


}

export default Carousel;
