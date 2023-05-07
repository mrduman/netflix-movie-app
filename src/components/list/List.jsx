import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import "./list.scss"
import ListItem from "../listItem/ListItem"

const List = () => {
    return (
        <div className="list">
            <span className="listTitle"> Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined />
                <div className="container">
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined />
            </div>
        </div>
    )
}

export default List
