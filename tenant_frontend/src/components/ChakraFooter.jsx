import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";
import { useTranslatedItems } from "./header_components/MenuTexts";
import { BiMailSend } from "react-icons/bi";
import { Logo } from "../assests/images/Logo";


const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

export const ChakraFooter = () => {
    const { t } = useTranslation();
    const date =  new Date();
    const year = date.getFullYear().toFixed()

    const { SOCIAL_BUTTONS, SUPPORT_LINKS, COMPANY_LINKS } = useTranslatedItems();

    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container as={Stack} maxW={"6xl"} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Box>
                            <Logo
                                color={useColorModeValue("gray.700", "white")}
                            />
                        </Box>
                        <Text fontSize={"sm"}>© {year} {t("TenantTalk. All rights reserved")}
                        </Text>
                        <Stack direction={"row"} spacing={6}>
                            {SOCIAL_BUTTONS && SOCIAL_BUTTONS.map((button) => (
                                <SocialButton
                                    label={button.i18nKey}
                                    href={button.href}
                                    key={button.i18nKey}
                                >
                                    <button.icon />
                                </SocialButton>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>
                            <Trans>{t("Company")}</Trans>
                        </ListHeader>
                        {COMPANY_LINKS && COMPANY_LINKS.map((link) => (
                            <Link href={link.href} key={link.i18nKey}>
                                {link.i18nKey}
                            </Link>
                        ))}
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>
                            <Trans>{t("Support")}</Trans>
                        </ListHeader>
                        {SUPPORT_LINKS && SUPPORT_LINKS.map((link) => (
                            <Link href={link.href} key={link.i18nKey}>
                                {link.i18nKey}
                            </Link>
                        ))}
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>
                            <Trans>{t("StayUpToDate")}</Trans>
                        </ListHeader>
                        <Stack direction={"row"}>
                            <Input
                                placeholder={t("YourEmailAddress")}
                                bg={useColorModeValue(
                                    "blackAlpha.100",
                                    "whiteAlpha.100"
                                )}
                                border={0}
                                _focus={{
                                    bg: "whiteAlpha.300",
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue("green.400", "green.800")}
                                color={useColorModeValue("white", "gray.800")}
                                _hover={{
                                    bg: "green.600",
                                }}
                                aria-label={t("Subscribe")}
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

