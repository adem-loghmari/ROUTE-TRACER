import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from './assets/p4.png'

const FirstSection = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#f6efe9',        
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: 'black',
                }}
                >
                     Find Your Learning Path Here!
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: 'black',
                }}
                >
                   Navigating free online resources for learning can be overwhelming, especially on a budget. Enter ROUTE TRACER your guide to the best free learning paths. Our mission is to streamline your journey, ensuring affordable access to quality education. Let ROUTE TRACER be your compass in the vast online learning landscape, tailored to your goals.
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#36656f',
                        color: '#458bf',
                        backgroundColor: '#36656f',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        "&&:hover": {
                            backgroundColor: "#3e737f"
                        },
                        "&&:focus": {
                            backgroundColor: "#3e737f"
                        }
                    }}
                    >
                        Take the test 
                    </Button>
                    <br/>
                    and find the best way for you to learn
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    
                    marginTop: -40
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default FirstSection