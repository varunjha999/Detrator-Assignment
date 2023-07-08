import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/router";
import { useCart } from "../CartContext";
import image from "next/image";
import profile from "./profile.png";

const pages = ["Home", "Search", "Posts", "Live"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();

  const { cartCount } = useCart();

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            component="a"
            sx={{
              mr: 10,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              textAlign: "inherit",
              // text-align: "left",
            }}
            onClick={() => {
              router.push("/");
            }}
            style={{ cursor: "pointer" }}
          >
            Post.js
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                style={{ textDecoration: "none", color: "#fff" }}
                href="/"
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

        {/* user profile */}
          <Box
            sx={{ flexGrow: 0,
              mr: 2,

              }}
            onClick={() => {
              router.push("/profile");
            }}
          >
            <Tooltip title="profile">
              <IconButton sx={{ p: 0 }}>
                <Badge color="error">
                  <Typography

                    style={{ color: "white" }}
                  >
{/*                    
                      <image 
                      src:String={profile}
                      alt:String="profile"
                      width:Number={30}
                      height:Number={30}

                      /> */}
                  
                    Varun
                  </Typography>
                </Badge>

              </IconButton>
            </Tooltip>
          </Box>


          {/* logout button */}
          <Box
            sx={{ flexGrow: 0,
              mr: 10,
             }}
            onClick={() => {
              router.push("/login");
            }
            }
          >
            <Tooltip title="Logout">
              <IconButton sx={{ p: 0 }}>
                <Badge color="error">
                  <Typography

                    style={{ color: "white" }}
                  >
                    Logout
                  </Typography>
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
          {/* cart button */}


          <Box
            sx={{ flexGrow: 0 }}
            onClick={() => {
              router.push("/cart");
            }}
          >
            <Tooltip title="Shopping Cart">
              <IconButton sx={{ p: 0 }}>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingBagOutlinedIcon style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
