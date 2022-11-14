import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";

export default function CommerceFooter(){
    return (
        <Box width='100%' sx={{ flexGrow: 1 }}
            bgcolor="white" color="black">
                <Divider color='black' />
            <Container maxWidth='lg'>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
                        <Box fontWeight='bolder' fontSize='large'>Get to Know Us</Box>
                        <Box>
                            <Link href="#" color="inherit">Careers</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Newsletter</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">About Us</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Sustainability</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Press Center</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Investor Relations</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Our Devices</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Our Science</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box fontWeight='bolder' fontSize='large'>Company Info</Box>
                        <Box>
                            <Link href="#" color="inherit">Albertsons Companies</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Suppliers</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">For Employees</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Foundation</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Prime</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Product Recalls</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box fontWeight='bolder' fontSize='large'>Messages</Box>
                        <Box>
                            <Link href="#" color="inherit">Backup</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">History</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Roll</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box fontWeight='bolder' fontSize='large'>Contact</Box>
                        <Box>
                            <Link href="#" color="inherit">Telegram</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Instegram</Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">Facebook</Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                    Material UI Workshop &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    );
}