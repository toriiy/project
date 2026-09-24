import { config } from "../configs/config";
import { supabase } from "../configs/supabase.config";
import { ApiError } from "../errors/api-error";

class StorageService {
  public async uploadFile(
    path: string,
    buffer: Buffer,
    contentType: string,
  ): Promise<string> {
    const { error } = await supabase.storage
      .from(config.supabaseBucket)
      .upload(path, buffer, { contentType, upsert: true });

    if (error) {
      throw new ApiError(error.message, 500);
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(config.supabaseBucket).getPublicUrl(path);

    return publicUrl;
  }

  public async deleteFile(publicUrl: string): Promise<void> {
    const path = this.extractPathFromUrl(publicUrl);

    const { error } = await supabase.storage
      .from(config.supabaseBucket)
      .remove([path]);

    if (error) {
      throw new ApiError(error.message, 500);
    }
  }

  private extractPathFromUrl(publicUrl: string): string {
    const marker = `/object/public/${config.supabaseBucket}/`;
    const index = publicUrl.indexOf(marker);

    if (index === -1) {
      throw new ApiError("Invalid photo url", 400);
    }

    return publicUrl.slice(index + marker.length);
  }
}

export const storageService = new StorageService();
