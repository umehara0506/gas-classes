class FileAndFolder {

  /**
   * 指定ファイルIDをコピーして指定フォルダに格納
   * コピーした新しいファイルIDを返す
   * 
   * @params {string} fileId - コピー元のファイルID
   * @params {string} folderId - 移動先のフォルダID
   * @return {string} コピーしたファイルID
   */
  static copyFileAndMove(fileId, folderId) {
    const folder = this.getFolder(folderId);
    
    const file = this.getFile(fileId);
    const originName = file.getName();

    const newFile = file.makeCopy(folder).setName(originName);
    const newFileId = newFile.getId();

    return newFileId;
  }

  static getFolder(folderId) {
    const folder = DriveApp.getFolderById(folderId);
    return folder;
  }

  static getFile(fileId) {
    const file = DriveApp.getFileById(fileId);
    return file
  }
}
