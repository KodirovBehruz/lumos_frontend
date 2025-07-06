import LogoBlack from "@icons/logo_black.svg"
import LogoWhite from "@icons/logo_white.svg"
import { IIconProps } from './interface';
import { FC } from 'react';
import categoryButtonIcon from "@icons/all_icon.png"
import catalogIcon from "@icons/catalog_icon.png"
import ava from "@icons/ava_male.svg"
import arrow from "@icons/arrow.svg"
import clock from "@icons/clock.svg"
import search from "@icons/search.svg"
import send from "@icons/send.svg"
import burger from "@icons/burger.svg"
import user from "@icons/user.svg"
import envelope from "@icons/envelope.svg"
import cart from '@icons/cart.svg'
import marker from '@icons/marker.svg'
import minus from '@icons/minus.svg'
import check from '@icons/check.png'
import none from '@icons/none.png'
import favorite from '@icons/favorite.svg'
import trash from '@icons/trash-bin.svg'
import empty from '@icons/empty.webp'


export const Icon: FC<IIconProps> = ({name, className, style}) => {
    const icons: Record<string, string> = {
        'logoBlack': LogoBlack,
        'logoWhite': LogoWhite,
        'categoryButtonIcon': categoryButtonIcon,
        'catalogIcon': catalogIcon,
        'ava': ava,

        'clock': clock,
        'search': search,
        'send': send,
        'burger': burger,
        'user': user,
        'envelope': envelope,
        'cart': cart,
        'marker': marker,
        'arrow': arrow,
        'minus': minus,
        'check': check,
        'none': none,
        'favorite': favorite,
        'trash': trash,
        'empty': empty
    }

    const IconComponent = icons[name || ''];

    return IconComponent ? (
        <img src={IconComponent} className={className} style={style} alt={`${name} icon`} />
    ) : null;
};
