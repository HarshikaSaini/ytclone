import { Stack } from '@mui/material';
import { logo } from "../utils/constants"
import { Link } from 'react-router-dom';
import {SearchBar} from './index';


const Navbar = () => (
    <Stack
        direction="row"
        alignProperty="center"
        p={2}
        sx={{ position: "sticky", backgroundColor: "#000", top: 0, justifyContent: "space-between" }}
    >
        <Link to="/" style={{ display: "flex", alignitems: "center" }}>
            <img src={logo} alt='youtube icon' height={45}></img>
        </Link>
      <SearchBar />
    </Stack>
)


export default Navbar