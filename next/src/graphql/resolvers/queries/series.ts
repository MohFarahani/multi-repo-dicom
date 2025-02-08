import { models } from '@/db/models';
import { validateInput } from '@/graphql/validation/validator';
import { seriesIdSchema, SeriesIdSchema } from '@/graphql/validation/schemas';
import { LogService } from '@/utils/logging';
import { AppError } from '@/utils/errorHandling';

export const seriesQueries = {
  allSeries: async () => {
    try {
      LogService.debug('Fetching all series');
      
      const series = await models.Series.findAll({
        include: [models.File]
      });
      
      LogService.info('Successfully fetched all series', { count: series.length });
      return series;
      
    } catch (error) {
      LogService.error('Failed to fetch series', error);
      throw error instanceof AppError ? error : new AppError('Failed to fetch series');
    }
  },

  series: async (_: unknown, args: SeriesIdSchema) => {
    try {
      const { idSeries } = validateInput(seriesIdSchema, args, 'series query');
      
      LogService.debug('Fetching series by ID', { idSeries });
      
      const series = await models.Series.findByPk(idSeries, {
        include: [models.File]
      });

      if (!series) {
        throw new AppError(`Series with ID ${idSeries} not found`, 'SERIES_NOT_FOUND', 404);
      }

      LogService.info('Successfully fetched series', { idSeries });
      return series;
      
    } catch (error) {
      LogService.error('Failed to fetch series', error, { idSeries: args.idSeries });
      throw error instanceof AppError ? error : new AppError('Failed to fetch series');
    }
  }
};