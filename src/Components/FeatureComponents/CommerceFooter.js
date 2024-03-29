import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function CommerceFooter() {
    return (
        <>
            <Link underline="none" href="#" fontSize='large'>
                <Box width='100%' sx={{ flexGrow: 1 }}
                    bgcolor="#41b0cc" color="white"
                    textAlign="center">
                    Back To Top
                </Box>
            </Link>
            <Box width='100%' sx={{ flexGrow: 1 }}
                bgcolor="#1976d2" color="white">
                <Container maxWidth='lg'>
                    <Grid container wrap="nowrap" spacing={0}>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight='bolder' fontSize='large'>Get to Know Us</Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Careers</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Newsletter</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">About Us</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Sustainability</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Press Center</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Investor Relations</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Our Devices</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Our Science</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight='bolder' fontSize='large'>Company Info</Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Albertsons Companies</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Suppliers</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">For Employees</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Foundation</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Prime</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Product Recalls</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight='bolder' fontSize='large'>Messages</Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Backup</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">History</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Roll</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight='bolder' fontSize='large'>Contact</Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Telegram</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Instegram</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="#" color="inherit">Facebook</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight='bolder' fontSize='large'>Become a seller</Box>
                            <Box>
                                <Link underline="hover" href="signUp" color="inherit">Register</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="sellerCenter" color="inherit">Seller center</Link>
                            </Box>
                            <Box>
                                <Link underline="hover" href="addProduct" color="inherit">Add product</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}