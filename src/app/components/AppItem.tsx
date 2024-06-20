'use client'
import React from 'react'
import { Card, CardBody, Heading, Stack, Text, Image, CardFooter, Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'


interface Props {
    app_name: string,
    app_desc: string,
    app_icon: any,
    ios_url: string,
    index_num: number
}

const AppItem = ({ app_name, app_desc, app_icon, ios_url, index_num }: Props) => {    
    if (index_num % 2 == 0) {
        return (
            <>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='elevated'
                    boxShadow='xl'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '330px' }}
                        src={app_icon}
                        alt={app_name}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>{app_name}</Heading>

                            <Text py='2'>
                                {app_desc}
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Link href={ios_url} color='blue.400' _hover={{ color: 'blue.500' }}>
                                <Image src="/download-on-the-app-store-apple.svg" alt="Follow us on App Store" width="140px" />
                            </Link>
                        </CardFooter>
                    </Stack>
                </Card>
            </>
        )
    } else {
        return (
            <>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='elevated'
                    boxShadow='xl'
                >
                    <Stack>
                        <CardBody>
                            <Heading size='md'>{app_name}</Heading>

                            <Text py='2'>
                                {app_desc}
                            </Text>
                        </CardBody>

                        <CardFooter>

                            <Link href={ios_url} color='blue.400' _hover={{ color: 'blue.500' }}>
                                <Image src="/download-on-the-app-store-apple.svg" alt="Follow us on App Store" width="140px" />
                            </Link>
                        </CardFooter>
                    </Stack>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '330px' }}
                        src={app_icon}
                        alt={app_name}
                    />
                </Card>
            </>
        )
    }

}

export default AppItem