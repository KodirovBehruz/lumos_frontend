import {ChangeEvent, FC, KeyboardEventHandler, useState} from "react";
import {useDelivery} from "../../hooks/API/useDelivery";
import {useMessage} from "../../hooks/useMessages";
import {authStore} from "../../store/auth";
import {useFetch} from "../../hooks/API/useFetch";
import {IUserLoginContract} from "../../models/delivery/contracts/IUserContracts";
import {Button, Card, Form, Input} from "antd";

export const Login: FC = () => {
    const delivery = useDelivery();
    const { error: showError } = useMessage();
    const { setTokens, getSelf } = authStore();
    const { execute: Login, loading: isLoading } = useFetch({
        asyncFunction: async (data: IUserLoginContract) => {
            const loginData = {
                email: data.email,
                password: data.password
            };

            return delivery.CS.authActions.login(loginData);
        },
        onSuccess: (response) => {
            setTokens(
                response.value?.accessToken ?? "",
                response.value?.refreshToken ?? ""
            );
            getSelf();
        },
        onError: () => showError('Неправильные данные')
    });

    const [state, setState] = useState<IUserLoginContract>({
        email: "",
        password: ""
    });

    const submit = async (): Promise<void> => {
        await Login(state);
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event): void => {
        if (event.key === 'Enter') {
            submit();
        }
    };

    return (
        <Card title="Авторизация" style={{ maxWidth: 400, margin: "auto", marginTop: 50 }}>
            <Form name="login" layout="vertical" onFinish={submit}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Введите email!", type: "email" }]}
                >
                    <Input
                        placeholder="Введите email"
                        onKeyDown={handleKeyDown}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setState({ ...state, email: event.target.value })
                        }
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: "Введите пароль!" }]}
                >
                    <Input.Password
                        placeholder="Введите пароль"
                        onKeyDown={handleKeyDown}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setState({ ...state, password: event.target.value })
                        }
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading} block onClick={submit}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
