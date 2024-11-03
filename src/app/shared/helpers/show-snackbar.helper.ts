import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "../components/snackbar/snackbar.component";

export const openSnackBar = (title: string, optionToClose: string, bgSnackbar: string, snackbarDurationInSeconds: number, snackbar: MatSnackBar) => {
  snackbar.openFromComponent(SnackbarComponent, {
    duration: snackbarDurationInSeconds * 1000,
    data: {
      title: title,
      optionToClose: optionToClose,
    },
    panelClass: [bgSnackbar],
  });
}