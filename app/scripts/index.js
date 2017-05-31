import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import header from "./header";
import anchor from "./anchor";

$(() => {
  header();
  anchor();
});
