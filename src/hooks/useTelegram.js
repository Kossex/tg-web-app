const Tg = window.Telegram.WebApp;
export function useTelegram() {
    const onClose = () => {
        Tg.close()
    }
    const onToggleButton = () => {
        if (Tg.MainButton.isVisible) {
            Tg.MainButton.hide();
        } else {

            Tg.MainButton.show();
        }
    }
        return {
            onClose,
            onToggleButton,
            Tg,
            user: Tg.initDataUnsafe?.user,

        }

}
